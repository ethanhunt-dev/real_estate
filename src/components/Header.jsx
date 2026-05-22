"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import EnquiryModal from "./EnquiryModal";

export default function Header() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-surface-base border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-16 h-16 md:w-20 md:h-20 group-hover:scale-105 transition-all duration-300 transform">
                <Image src="/logo.svg" alt="Vishwa Priya Developers Logo" fill className="object-contain" priority />
              </div>
              <span className="font-serif text-2xl font-bold text-dark hidden lg:block">
                Vishwa Priya Developers
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-primary text-primary"
                      : "border-transparent text-text-secondary hover:text-primary hover:border-border"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Enquiry Button */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-primary text-white px-7 py-3 rounded-md font-semibold hover:bg-[#5A2EE0] hover:-translate-y-[2px] hover:shadow-md transition-all duration-150 focus:outline-none focus:ring-[3px] focus:ring-primary/20"
            >
              Enquiry
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-secondary hover:text-primary p-2 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Sidebar */}
      <div className={`fixed inset-0 z-[100] md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'visible' : 'invisible pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Sidebar Panel */}
        <div className={`fixed inset-y-0 left-0 z-[100] w-4/5 max-w-sm bg-surface-base shadow-2xl overflow-y-auto transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between p-4 border-b border-border">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="relative w-16 h-16">
                <Image src="/logo.svg" alt="Vishwa Priya Developers Logo" fill className="object-contain" priority />
              </div>
            </Link>
            
            {/* Close Button */}
            <button
              type="button"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-[#D32F2F] text-white hover:bg-red-700 transition-colors focus:outline-none"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "text-primary bg-surface-2"
                      : "text-dark hover:bg-surface-2 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <div className="pt-6 mt-6 border-t border-border">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full text-center block px-4 py-3 rounded-md text-base font-semibold text-white bg-primary hover:bg-[#5A2EE0] transition-colors shadow-soft"
              >
                Quick Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>

      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}

