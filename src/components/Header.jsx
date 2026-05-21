"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import EnquiryModal from "./EnquiryModal";

export default function Header() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105 border-2 border-brand-gold overflow-hidden">
                <Image src="/logo.svg" alt="Vishwa Priya Developers Logo" fill className="object-cover scale-150 origin-center" priority />
              </div>
              <span className="font-serif text-2xl font-bold text-brand-navy hidden lg:block">
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
                      ? "border-brand-navy text-brand-navy"
                      : "border-transparent text-gray-500 hover:text-brand-navy hover:border-gray-300"
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
              className="bg-brand-navy text-white px-6 py-2 rounded-md font-medium hover:bg-brand-navy/90 transition-colors"
            >
              Enquiry
            </button>
          </div>

          {/* Mobile menu button (placeholder) */}
          <div className="flex items-center md:hidden">
            <button className="text-gray-500 hover:text-brand-navy p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}

