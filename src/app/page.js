"use client";

import Link from "next/link";
import { useState } from "react";
import EnquiryModal from "@/components/EnquiryModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Placeholder for hero background image */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/80 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay" />

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
          <h1 className="font-serif text-5xl md:text-6xl text-white font-bold mb-6 drop-shadow-md">
            Your Dream Land Awaits
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow">
            Discover premium plotting and residential opportunities designed for the modern lifestyle. We craft foundations where legacies are built.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-brand-gold text-brand-navy font-semibold rounded hover:bg-yellow-400 transition-colors w-full sm:w-auto"
            >
              Quick Inquiry &rarr;
            </button>
            <Link href="/projects" className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-brand-navy transition-colors w-full sm:w-auto">
              Explore Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-30 w-full">
        <div className="bg-white rounded-lg shadow-xl p-8 grid grid-cols-1 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          <div className="text-center px-4">
            <h3 className="font-serif text-4xl font-bold text-brand-navy">15+ Years</h3>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-2">Unmatched Excellence</p>
          </div>
          <div className="text-center px-4 pt-4 md:pt-0">
            <h3 className="font-serif text-4xl font-bold text-brand-navy">5000+</h3>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-2">Happy Customers</p>
          </div>
          <div className="text-center px-4 pt-4 md:pt-0">
            <h3 className="font-serif text-4xl font-bold text-brand-navy">25+</h3>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-2">Completed Projects</p>
          </div>
          <div className="flex items-center justify-center px-4 pt-4 md:pt-0 text-sm text-gray-600 font-medium">
            Leading the way in transparent and premium land development.
          </div>
        </div>
      </div>

      {/* Pioneering Property Development Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Our Specialties</span>
          <h2 className="font-serif text-4xl font-bold text-brand-navy mt-2">Pioneering Property Development</h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-sm border border-gray-100">
            <div className="p-12 md:w-1/2 flex flex-col justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-brand-navy">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Premium Construction</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From blueprint to reality, we build with uncompromised quality and architectural finesse. Our structures are built to withstand generations.
              </p>
              <Link href="/services" className="text-brand-navy font-semibold hover:underline inline-flex items-center">
                View Building Standards <span className="ml-2">&rarr;</span>
              </Link>
            </div>
            <div className="md:w-1/2 h-80 md:h-auto bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center">
            </div>
          </div>
        </div>
      </section>

      {/* Defining The Future Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px] w-full bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80')] bg-cover bg-center">
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="font-serif text-4xl font-bold text-brand-navy">98%</div>
                  <div className="text-sm font-bold tracking-wider text-gray-500 uppercase mt-1">Client Retention</div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Our Legacy</span>
              <h2 className="font-serif text-4xl font-bold text-brand-navy mt-4 mb-6">Defining The Future Of Real Estate Excellence</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Vishwa Priya Developers was founded on the principles of transparency, architectural integrity, and customer-centric growth. Over 15 years, we have evolved from a plotting specialist into a multi-faceted real estate powerhouse.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1 text-brand-navy">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Clear Titles</h4>
                    <p className="text-sm text-gray-600 mt-1">Hassle-free legal processing for every plot.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1 text-brand-navy">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Prime Locations</h4>
                    <p className="text-sm text-gray-600 mt-1">Strategically selected for high ROI.</p>
                  </div>
                </div>
              </div>

              <Link href="/about-us" className="px-8 py-3 bg-brand-navy text-white font-semibold rounded hover:bg-blue-800 transition-colors inline-block">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Testimonials</span>
          <h2 className="font-serif text-4xl font-bold text-brand-navy mt-2">What Our Clients Say</h2>
        </div>
        
        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-marquee py-4 hover:[animation-play-state:paused]">
            {/* First set of testimonials */}
            {[
              { name: "Rahul S.", text: "Vishwa Priya Developers made my dream of owning a plot a reality. The process was seamless and transparent.", role: "Homeowner" },
              { name: "Priya M.", text: "Exceptional quality and timely delivery. I highly recommend them for anyone looking for premium real estate.", role: "Investor" },
              { name: "Amit V.", text: "The team is very professional and helpful. They guided me through every step of the investment.", role: "Business Owner" },
              { name: "Sneha K.", text: "A trustworthy name in real estate. Their projects are strategically located and offer great amenities.", role: "Resident" },
            ].map((testimonial, i) => (
              <div key={i} className="mx-4 w-80 sm:w-96 flex-shrink-0 bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 whitespace-normal">
                <div className="flex text-brand-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <h4 className="font-bold text-brand-navy">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for infinite scroll */}
            {[
              { name: "Rahul S.", text: "Vishwa Priya Developers made my dream of owning a plot a reality. The process was seamless and transparent.", role: "Homeowner" },
              { name: "Priya M.", text: "Exceptional quality and timely delivery. I highly recommend them for anyone looking for premium real estate.", role: "Investor" },
              { name: "Amit V.", text: "The team is very professional and helpful. They guided me through every step of the investment.", role: "Business Owner" },
              { name: "Sneha K.", text: "A trustworthy name in real estate. Their projects are strategically located and offer great amenities.", role: "Resident" },
            ].map((testimonial, i) => (
              <div key={i + 4} className="mx-4 w-80 sm:w-96 flex-shrink-0 bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 whitespace-normal">
                <div className="flex text-brand-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <h4 className="font-bold text-brand-navy">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
