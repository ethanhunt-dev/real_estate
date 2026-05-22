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
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-40 h-40 md:w-56 md:h-56 group-hover:scale-105 transition-all duration-300 transform">
                <Image src="/logo.svg" alt="Vishwa Priya Developers Logo" fill className="object-contain" priority />
              </div>
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
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${isActive
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
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-text-secondary hover:text-primary p-2 focus:outline-none"
              aria-label="Open mobile menu"
            >
              <svg className="h-7 w-7 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-black/50 md:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div 
        className={`fixed top-0 left-0 h-[100dvh] w-[80%] max-w-[320px] bg-white z-[70] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col shadow-2xl ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 pb-2">
          {/* Logo */}
          <div className="relative w-36 h-20">
            <Image src="/logo.svg" alt="Kalidindi Group Logo" fill className="object-contain object-left" priority />
          </div>
          {/* Close Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center w-7 h-7 rounded-full bg-[#CC2027] text-white hover:bg-red-700 transition-colors focus:outline-none shrink-0"
            aria-label="Close mobile menu"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto flex flex-col">
          <div className="flex flex-col mt-2">
            {navLinks.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex justify-between items-center px-6 py-4 text-[14px] text-gray-800 border-b border-gray-100 hover:text-[#CC2027] transition-colors"
                >
                  {link.name}
                  {link.name === "Projects" && (
                    <span className="text-gray-500 text-lg leading-none font-light">+</span>
                  )}
                </Link>
              );
            })}
          </div>
          
          <div className="px-6 py-8 mt-2 bg-white">
            <h3 className="text-[16px] font-bold text-gray-900 mb-6">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center bg-gray-50/50">
                  <svg className="w-4 h-4 text-[#CC2027]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-[12px] text-gray-600 leading-relaxed pt-1">
                  #202, Manju Residency, Behind Community Hall, Sardar Patel Nagar, Near JNTU Metro Station, Kukatpally, Hyderabad - 500072
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center bg-gray-50/50">
                  <svg className="w-4 h-4 text-[#CC2027]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-[12px] text-gray-600">
                  9885424365
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}

