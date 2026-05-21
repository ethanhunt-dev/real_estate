import Link from "next/link";

export default function StrategicPlotting() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        
        <div className="relative z-20 px-4 max-w-7xl mx-auto w-full pt-16">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-brand-gold text-brand-navy text-xs font-bold uppercase tracking-wider rounded-sm mb-6">
              Our Expertise
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 drop-shadow-md leading-tight">
              Strategic Plotting: Defining the Future of Living
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow max-w-xl">
              We transform raw landscapes into meticulously engineered environments, creating a canvas for your dream home or investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-brand-gold text-brand-navy font-semibold rounded hover:bg-yellow-400 transition-colors">
                Get Started
              </button>
              <button className="px-8 py-3 bg-transparent border border-white text-white font-semibold rounded hover:bg-white hover:text-brand-navy transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column (Content) */}
          <div className="lg:w-2/3">
            
            {/* Precision in Every Acre */}
            <div className="mb-20">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy mb-10">
                Precision in Every Acre
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-brand-navy mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Prime Locations</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Strategically selected areas with high appreciation potential and seamless connectivity to urban hubs.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-brand-navy mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Architectural Layouts</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Vastu-compliant and scientifically planned plot dimensions designed to maximize space and natural light.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-brand-navy mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Clear Title Deeds</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Transparent legal documentation ensuring 100% peace of mind and hassle-free ownership transfers.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-brand-navy mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Sustainable Infrastructure</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Integrated rain-water harvesting, underground cabling, and eco-friendly waste management systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Showcase */}
            <div>
              <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-brand-navy mb-2">Project Showcase</h2>
                  <p className="text-sm text-gray-600">Glimpses of our successfully delivered plotting projects.</p>
                </div>
                <Link href="/projects" className="text-brand-navy font-semibold hover:underline text-sm whitespace-nowrap">
                  View All Projects &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Large Left Image */}
                <div className="sm:row-span-2 relative rounded-xl overflow-hidden shadow-sm h-64 sm:h-auto group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80')] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-300">Completed</span>
                    <h3 className="text-white font-serif text-xl font-bold">Vishwa Priya Meadows</h3>
                  </div>
                </div>
                
                {/* Top Right Image */}
                <div className="relative rounded-xl overflow-hidden shadow-sm h-48 sm:h-64 group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80')] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-white font-serif text-xl font-bold">Silicon Valley Plots</h3>
                  </div>
                </div>
                
                {/* Bottom Right Image */}
                <div className="relative rounded-xl overflow-hidden shadow-sm h-48 sm:h-64 group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80')] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-white font-serif text-xl font-bold">Sunrise Enclave</h3>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">
              
              {/* Request Details Form */}
              <div className="bg-[#425d90] rounded-2xl p-8 shadow-xl text-white">
                <h3 className="font-serif text-2xl font-bold mb-3">Request Details</h3>
                <p className="text-sm text-blue-100 mb-8">
                  Interested in our plotting services? Our consultants are here to help.
                </p>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold tracking-wider text-blue-200 uppercase mb-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-wider text-blue-200 uppercase mb-1">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-wider text-blue-200 uppercase mb-1">Phone Number</label>
                    <input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                  </div>
                  <button type="submit" className="w-full py-3 mt-4 bg-brand-gold text-brand-navy font-bold rounded-md hover:bg-yellow-400 transition-colors">
                    Send Inquiry
                  </button>
                </form>
              </div>

              {/* Other Services */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-6">Other Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="flex items-center justify-between py-3 border-b border-gray-100 text-gray-600 hover:text-brand-navy transition-colors group">
                      <span className="font-medium text-sm">Residential Construction</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center justify-between py-3 border-b border-gray-100 text-gray-600 hover:text-brand-navy transition-colors group">
                      <span className="font-medium text-sm">Commercial Spaces</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center justify-between py-3 border-b border-gray-100 text-gray-600 hover:text-brand-navy transition-colors group">
                      <span className="font-medium text-sm">Land Acquisition</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center justify-between py-3 text-gray-600 hover:text-brand-navy transition-colors group">
                      <span className="font-medium text-sm">Consultancy</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
