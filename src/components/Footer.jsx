import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark text-text-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-40 h-40 md:w-56 md:h-56 flex-shrink-0">
                <Image src="/logo.svg" alt="Vishwa Priya Developers Logo" fill className="object-contain" />
              </div>
            </div>
            <p className="text-sm text-text-tertiary">
              Creating value through premium land development and architectural excellence. Your trusted partner in building a secure future since 1995.
            </p>
            <div className="flex space-x-4 pt-2">
              {/* Social Icons (Placeholders) */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Website</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-text-tertiary hover:text-primary transition-colors">
                <span className="sr-only">Community</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-text-tertiary hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="text-sm text-text-tertiary hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="text-sm text-text-tertiary hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/services" className="text-sm text-text-tertiary hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/contact-us" className="text-sm text-text-tertiary hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="flex-shrink-0 h-5 w-5 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-gray-400">info@vishwapriya.com</span>
              </li>
              <li className="flex items-start">
                <svg className="flex-shrink-0 h-5 w-5 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm text-gray-400">+91 80 4567 8900</span>
              </li>
              <li className="flex items-start">
                <svg className="flex-shrink-0 h-5 w-5 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-400">12/4, MG Road,<br />Bengaluru, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Newsletter Sign-up</h4>
            <p className="text-sm text-text-tertiary mb-4">Get early access to new project launches.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full min-w-0 px-4 py-2 text-base text-dark bg-surface-base border border-border rounded-l-md focus:outline-none focus:ring-[3px] focus:ring-primary/20 sm:text-sm"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-primary hover:bg-[#5A2EE0] transition-colors focus:outline-none focus:ring-[3px] focus:ring-offset-2 focus:ring-primary/20"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-text-tertiary">
            &copy; 2026 Vishwa Priya Developers. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-text-tertiary hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-text-tertiary hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
