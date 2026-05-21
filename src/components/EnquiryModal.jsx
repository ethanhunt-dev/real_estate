"use client";

import { useEffect } from "react";

export default function EnquiryModal({ isOpen, onClose }) {
  // Removed overflow hidden to prevent layout shift
  useEffect(() => {
    // We intentionally don't lock scroll here to prevent layout jump on desktop/mobile
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-surface-base rounded-xl shadow-lg overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-surface-2 px-6 py-4 flex items-center justify-between border-b border-border">
          <h3 className="font-serif text-xl font-bold text-dark">Quick Enquiry</h3>
          <button 
            onClick={onClose}
            className="text-text-secondary hover:text-dark transition-colors p-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          <p className="text-sm text-text-secondary mb-6">
            Leave your details below and our property experts will get back to you shortly.
          </p>
          
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); alert('Enquiry submitted successfully!'); }}>
            <div>
              <label className="block text-xs font-bold text-dark mb-1">Full Name</label>
              <input 
                type="text" 
                required
                placeholder="John Doe" 
                className="w-full px-4 py-2.5 bg-surface-base border-[1.5px] border-[#E0E0E0] rounded-md text-dark focus:bg-surface-base focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all text-sm" 
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-dark mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+91 00000 00000" 
                  className="w-full px-4 py-2.5 bg-surface-base border-[1.5px] border-[#E0E0E0] rounded-md text-dark focus:bg-surface-base focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all text-sm" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-dark mb-1">Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com" 
                  className="w-full px-4 py-2.5 bg-surface-base border-[1.5px] border-[#E0E0E0] rounded-md text-dark focus:bg-surface-base focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all text-sm" 
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-dark mb-1">Interested In</label>
              <select className="w-full px-4 py-2.5 bg-surface-base border-[1.5px] border-[#E0E0E0] rounded-md text-dark focus:bg-surface-base focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all text-sm appearance-none">
                <option>Premium Residential Plots</option>
                <option>Villa Projects</option>
                <option>Organic Farmlands</option>
                <option>General Enquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-dark mb-1">Message (Optional)</label>
              <textarea 
                placeholder="I would like to know more about..." 
                rows="3" 
                className="w-full px-4 py-2.5 bg-surface-base border-[1.5px] border-[#E0E0E0] rounded-md text-dark focus:bg-surface-base focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all text-sm resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-[14px] mt-2 bg-primary text-white font-semibold rounded-md hover:bg-[#5A2EE0] hover:-translate-y-[2px] transition-all duration-150 shadow-soft focus:outline-none focus:ring-[3px] focus:ring-primary/20"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
