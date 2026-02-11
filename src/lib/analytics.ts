// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = 'G-7BBL3Z8BHH';

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track specific events for your landing page
export const trackScheduleCall = () => {
  trackEvent('click', 'engagement', 'schedule_call');
};

export const trackEmailSubmit = () => {
  trackEvent('submit', 'lead_generation', 'email_form');
};

export const trackVideoPlay = () => {
  trackEvent('play', 'engagement', 'hero_video');
};
