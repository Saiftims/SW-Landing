"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export interface ScheduleCallFormProps {
  trigger: React.ReactNode;
}

export const ScheduleCallForm = ({ trigger }: ScheduleCallFormProps) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [submittedData, setSubmittedData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    lawFirm: "",
    meetingTopic: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send email');
      }

      setSubmitStatus('success');
      
      // Store submitted data for Calendly (preserve user info)
      const userData = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
      };
      
      console.log('Form data before storing:', formData);
      console.log('Storing user data for Calendly:', userData);
      
      setSubmittedData(userData);
      
      // Show calendar immediately 
      setShowCalendar(true);
      
      // Longer delay to ensure state is properly updated
      setTimeout(() => {
        console.log('About to load Calendly widget. Current submittedData:', submittedData);
        console.log('Stored userData:', userData);
        loadCalendlyWidget(userData); // Pass userData directly
      }, 500);
      
      // Don't reset form data - keep it until modal closes

    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetAllState = () => {
    setSubmitStatus('idle');
    setErrorMessage('');
    setShowCalendar(false);
    setSubmittedData({
      firstName: "",
      lastName: "",
      email: "",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      lawFirm: "",
      meetingTopic: ""
    });
    
    // Clear Calendly widget completely
    const calendlyWidget = document.getElementById('calendly-inline-widget');
    if (calendlyWidget) {
      calendlyWidget.innerHTML = '';
    }
    
    // Remove any Calendly loading overlays
    const loadingOverlay = document.querySelector('.calendly-loading');
    if (loadingOverlay) {
      loadingOverlay.classList.remove('hidden');
    }
  };

  const handleModalClose = (shouldReset = true) => {
    setOpen(false);
    if (shouldReset) {
      resetAllState();
    }
  };

  // Reset state when modal closes via dialog change
  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      resetAllState();
    }
  };

  // Load Calendly widget inline
  const loadCalendlyWidget = (userData?: any) => {
    // Use passed userData or fallback to state
    const dataToUse = userData || submittedData;
    
    console.log('loadCalendlyWidget called with:', { userData, submittedData, dataToUse });
    
    // Ensure widget container is ready
    const widgetContainer = document.getElementById('calendly-inline-widget');
    if (!widgetContainer) {
      console.error('Calendly widget container not found');
      return;
    }

    // Clear any existing content
    widgetContainer.innerHTML = '';
    
    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
      
      script.onload = () => {
        setTimeout(() => initializeCalendlyWidget(dataToUse), 500);
      };
    } else {
      // If script already loaded, initialize immediately
      setTimeout(() => initializeCalendlyWidget(dataToUse), 500);
    }
  };

  const initializeCalendlyWidget = (userData?: any) => {
    const widgetContainer = document.getElementById('calendly-inline-widget');
    if (!widgetContainer) {
      console.error('Widget container not found during initialization');
      return;
    }

    // @ts-ignore
    if (window.Calendly) {
      try {
        // Use passed userData or fallback to state
        const dataToUse = userData || submittedData;
        
        // Ensure we have the submitted data
        const firstName = dataToUse.firstName?.trim() || '';
        const lastName = dataToUse.lastName?.trim() || '';
        const email = dataToUse.email?.trim() || '';
        const fullName = `${firstName} ${lastName}`.trim();

        console.log('initializeCalendlyWidget using data:', dataToUse);
        console.log('Prefilling Calendly with:', { firstName, lastName, email, fullName });

        // Create URL with prefill parameters as primary method
        const baseUrl = 'https://calendly.com/contact-silentwitness/silent-witness-demo';
        const urlParams = new URLSearchParams();
        
        if (fullName) urlParams.append('name', fullName);
        if (email) urlParams.append('email', email);
        
        // Set default timezone to California (Pacific Time)
        urlParams.append('timezone', 'America/Los_Angeles');
        
        const urlWithParams = `${baseUrl}?${urlParams.toString()}`;
        
        console.log('Calendly URL with params:', urlWithParams);

        // @ts-ignore
        window.Calendly.initInlineWidget({
          url: urlWithParams,
          parentElement: widgetContainer,
          prefill: {
            name: fullName,
            firstName: firstName,
            lastName: lastName, 
            email: email,
            // Try different variations of field names
            'first_name': firstName,
            'last_name': lastName,
          },
          utm: {
            utmSource: 'silent-witness-website'
          }
        });
        
        // Hide loading overlay after successful initialization
        setTimeout(() => {
          const loadingOverlay = document.querySelector('.calendly-loading');
          if (loadingOverlay) {
            loadingOverlay.classList.add('hidden');
          }
        }, 2000);
        
      } catch (error) {
        console.error('Error initializing Calendly widget:', error);
        // Hide loading overlay on error
        const loadingOverlay = document.querySelector('.calendly-loading');
        if (loadingOverlay) {
          loadingOverlay.classList.add('hidden');
        }
      }
    } else {
      console.error('Calendly not available on window object');
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className={`w-[95vw] ${showCalendar ? 'max-w-[950px]' : 'max-w-[480px]'} max-h-[95vh] overflow-y-auto sm:w-full transition-all duration-500 ease-in-out`}>
        <DialogHeader className="space-y-3 pb-6 border-b border-gray-100">
          <div className="text-center">
            <div className="mx-auto w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <DialogTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              {showCalendar ? 'Choose Your Time' : 'Schedule a Call'}
            </DialogTitle>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              {showCalendar 
                ? 'Pick a time that works best for your consultation' 
                : 'Let\'s discuss how Silent Witness can help your practice'
              }
            </p>
          </div>
        </DialogHeader>
        
        {!showCalendar && (
          <div className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="group">
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-800 mb-2 group-focus-within:text-blue-600 transition-colors">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="h-12 text-base border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-800 mb-2 group-focus-within:text-blue-600 transition-colors">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="h-12 text-base border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2 group-focus-within:text-blue-600 transition-colors">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                      Email Address
                    </span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 text-base border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-800 mb-2 group-focus-within:text-blue-600 transition-colors">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Phone Number
                    </span>
                  </label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="h-12 text-base border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="lawFirm" className="block text-sm font-semibold text-gray-800 mb-2 group-focus-within:text-blue-600 transition-colors">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      Law Firm / Organization
                    </span>
                  </label>
                  <Input
                    id="lawFirm"
                    name="lawFirm"
                    value={formData.lawFirm}
                    onChange={handleChange}
                    required
                    className="h-12 text-base border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Smith & Associates Law"
                  />
                </div>

                <div className="group">
                  <label htmlFor="meetingTopic" className="block text-sm font-semibold text-gray-800 mb-2 group-focus-within:text-blue-600 transition-colors">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      Meeting Topic 
                      <span className="text-gray-500 font-normal">(Optional)</span>
                    </span>
                  </label>
                  <Input
                    id="meetingTopic"
                    name="meetingTopic"
                    placeholder="e.g., Car accident case, Personal injury claim, Expert witness needs..."
                    value={formData.meetingTopic}
                    onChange={handleChange}
                    className="h-12 text-base border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>
              


              {submitStatus === 'error' && (
                <div className="relative overflow-hidden bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 rounded-2xl p-6 shadow-lg">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-rose-500"></div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-red-900 mb-1">
                        Oops! Something went wrong
                      </h3>
                      <p className="text-red-700 break-words">
                        {errorMessage}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {!showCalendar && (
                <div className="pt-6 border-t border-gray-100">
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending Request...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        <span>Send Request</span>
                      </div>
                    )}
                  </Button>
                  <p className="text-center text-sm text-gray-500 mt-3">
                    We'll respond within 24 hours
                  </p>
                </div>
              )}
            </form>
          </div>
        )}

        {/* Enhanced Calendly Widget */}
        {showCalendar && (
          <div className="-mx-6">
            <div className="relative">
              <div 
                id="calendly-inline-widget" 
                className="min-h-[650px] w-full"
                style={{ minHeight: '650px', height: '650px' }}
              ></div>
              
              {/* Loading overlay */}
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center calendly-loading">
                <div className="text-center">
                  <svg className="animate-spin w-8 h-8 text-blue-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 714 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <p className="text-gray-600 font-medium">Loading calendar...</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};