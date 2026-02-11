"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScheduleCallForm } from "@/components/ScheduleCallForm";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#features", label: "Features", id: "features" },
    { href: "#howitworks", label: "How It Works", id: "howitworks" },
    { href: "#technology", label: "Technology", id: "technology" },
    { href: "https://docs.silentwitness.ai/", label: "API", external: true },
    { href: "/contact", label: "Contact", external: false },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled 
            ? "py-2.5 bg-gray-950/40 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.2)]" 
            : "py-4 bg-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logos/Silent-Witness-Logo.png"
              alt="Silent Witness"
              width={140}
              height={28}
              className="h-6 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0.5">
            {navLinks.map((link) => (
              link.external ? (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 text-[13px] font-medium text-white/50 hover:text-white/90 rounded-md transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ) : link.id ? (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavScroll(e, link.id!)}
                  className="px-3.5 py-1.5 text-[13px] font-medium text-white/50 hover:text-white/90 rounded-md transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-1.5 text-[13px] font-medium text-white/50 hover:text-white/90 rounded-md transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <ScheduleCallForm 
              trigger={
                <button className="px-3.5 py-1.5 text-[13px] font-medium text-white/60 hover:text-white transition-colors">
                  Schedule Demo
                </button>
              }
            />
            <button 
              onClick={() => window.location.href = 'https://App.silentwitness.ai'}
              className="px-4 py-1.5 text-[13px] font-medium text-white rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 transition-all duration-200"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-72 bg-gray-900 border-l border-white/10 transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 pt-20 space-y-2">
            {navLinks.map((link) => (
              link.external ? (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-base font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  {link.label}
                </Link>
              ) : link.id ? (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavScroll(e, link.id!)}
                  className="block px-4 py-3 text-base font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  {link.label}
                </Link>
              )
            ))}
            
            <div className="pt-4 space-y-3">
              <ScheduleCallForm 
                trigger={
                  <button className="w-full px-4 py-3 text-base font-medium text-white/70 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-all">
                    Schedule Demo
                  </button>
                }
              />
              <button 
                onClick={() => window.location.href = 'https://App.silentwitness.ai'}
                className="w-full px-4 py-3 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/25 transition-all"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
