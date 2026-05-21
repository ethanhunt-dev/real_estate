import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        
        <div className="relative z-20 px-4 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-6xl text-white font-bold mb-6 drop-shadow-md leading-tight">
              Crafting Legacies in <span className="text-brand-gold">Concrete and Land</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 drop-shadow">
              Building more than just structures, we create enduring environments where generations thrive and memories are etched in stone.
            </p>
            <button className="px-8 py-3 bg-brand-gold text-brand-navy font-semibold rounded hover:bg-yellow-400 transition-colors">
              Explore Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Our Heritage Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 relative">
               {/* Decorative background box */}
              <div className="absolute -inset-4 bg-blue-50 rounded-lg transform translate-x-4 translate-y-4"></div>
              <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px] w-full bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80')] bg-cover bg-center">
              </div>
            </div>
            
            <div className="md:w-1/2">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Our Heritage</span>
              <h2 className="font-serif text-4xl font-bold text-brand-navy mt-4 mb-6">Three Decades of Unwavering Excellence</h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p>
                  Vishwa Priya Developers began with a singular vision: to redefine the real estate landscape through transparency and architectural integrity. What started as a small boutique consultancy has evolved into a powerhouse of land development and residential luxury.
                </p>
                <p>
                  We have weathered market cycles by sticking to our core belief—that a home is the most significant investment a family makes. This responsibility drives our commitment to sourcing the finest materials and selecting prime locations that offer both growth and lifestyle.
                </p>
              </div>
              
              <div className="flex gap-12">
                <div>
                  <h3 className="font-serif text-4xl font-bold text-brand-navy">25+</h3>
                  <p className="text-sm font-semibold text-gray-500 mt-1">Years of Experience</p>
                </div>
                <div>
                  <h3 className="font-serif text-4xl font-bold text-brand-navy">1500+</h3>
                  <p className="text-sm font-semibold text-gray-500 mt-1">Happy Families</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Driven Design Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-bold text-brand-navy mb-4">Purpose Driven Design</h2>
            <p className="text-gray-600">Our roadmap isn't just about buildings; it's about the future of urban living and sustainable communities.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-brand-navy">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and innovative developer in the region, setting global benchmarks for quality, sustainability and architectural aesthetics in residential living.
              </p>
            </div>
            
            <div className="bg-gray-400 text-white p-10 rounded-2xl shadow-sm relative overflow-hidden">
               {/* Decorative elements */}
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-gray-300 rounded-full mix-blend-multiply opacity-50"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-100 leading-relaxed">
                  Empowering homeowners by delivering meticulously planned developments that combine modern engineering with environmental consciousness, ensuring long-term value and aesthetic delight for every client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 border-b border-gray-200 pb-6 flex flex-col md:flex-row md:items-end justify-between">
            <div className="max-w-xl">
              <h2 className="font-serif text-4xl font-bold text-brand-navy mb-4">Our Core Values</h2>
              <p className="text-gray-600">The pillars that support every project we undertake and every relationship we build.</p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow bg-gray-50">
              <div className="text-brand-navy mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600 text-sm">Honesty in every contract and ethical conduct in every construction phase.</p>
            </div>
            {/* Value 2 */}
            <div className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow bg-gray-50">
              <div className="text-brand-navy mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-600 text-sm">Clear communication, no hidden costs, and open access to project milestones.</p>
            </div>
            {/* Value 3 */}
            <div className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow bg-gray-50">
              <div className="text-brand-navy mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600 text-sm">Adhering to the highest standards of materials and structural engineering.</p>
            </div>
            {/* Value 4 */}
            <div className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow bg-gray-50">
              <div className="text-brand-navy mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Customer First</h3>
              <p className="text-gray-600 text-sm">Creating spaces centered around human comfort and long-term satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Management Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Leadership</span>
              <h2 className="font-serif text-4xl font-bold text-brand-navy mt-4 mb-6">Meet Our Management</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At the helm of Vishwa Priya Developers is a team of visionary leaders who bring decades of combined experience in real estate, urban planning, and sustainable development. Their foresight and dedication have been instrumental in our journey from a boutique consultancy to an industry leader.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Driven by a passion for excellence and a commitment to our core values, our management ensures that every project not only meets but exceeds the expectations of our discerning clients.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden shadow-sm">
                   <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" alt="Managing Director" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-gray-900 text-lg">Dr. A. Sharma</h4>
                  <p className="text-sm text-gray-500">Managing Director</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
               <div className="absolute -inset-4 bg-gray-200 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
               <div className="relative rounded-lg overflow-hidden shadow-xl h-[450px] w-full bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80')] bg-cover bg-center">
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestone Journey Section */}
      <section className="py-24 bg-[#374151] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">Milestone Journey</h2>
            <p className="text-gray-300">Tracing our growth from a dream to a legacy.</p>
          </div>
          
          <div className="relative border-l-2 border-gray-600 ml-6 md:ml-1/2 md:translate-x-[-1px]">
            {/* 1995 */}
            <div className="mb-16 relative w-full md:w-1/2 md:pr-12 md:text-right">
              <div className="absolute top-1 -left-[11px] md:-right-[11px] md:left-auto w-5 h-5 rounded-full bg-[#374151] border-4 border-brand-navy z-10"></div>
              <div className="font-serif text-3xl font-bold text-brand-gold mb-2 pl-8 md:pl-0">1995</div>
              <h3 className="text-xl font-bold mb-2 pl-8 md:pl-0">The Foundation</h3>
              <p className="text-gray-400 pl-8 md:pl-0">Vishwa Priya Developers incorporated as a boutique land development firm with its first project in the outskirts.</p>
            </div>
            
            {/* 2005 */}
            <div className="mb-16 relative w-full md:w-1/2 md:ml-auto md:pl-12">
              <div className="absolute top-1 -left-[11px] w-5 h-5 rounded-full bg-[#374151] border-4 border-brand-navy z-10"></div>
              <div className="font-serif text-3xl font-bold text-brand-gold mb-2 pl-8 md:pl-0">2005</div>
              <h3 className="text-xl font-bold mb-2 pl-8 md:pl-0">Expansion into Luxury</h3>
              <p className="text-gray-400 pl-8 md:pl-0">Launched our flagship gated community 'Vishwa Prime', marking our entry into high-end residential segments.</p>
            </div>
            
            {/* 2015 */}
            <div className="mb-16 relative w-full md:w-1/2 md:pr-12 md:text-right">
              <div className="absolute top-1 -left-[11px] md:-right-[11px] md:left-auto w-5 h-5 rounded-full bg-[#374151] border-4 border-brand-navy z-10"></div>
              <div className="font-serif text-3xl font-bold text-brand-gold mb-2 pl-8 md:pl-0">2015</div>
              <h3 className="text-xl font-bold mb-2 pl-8 md:pl-0">Sustainability Integration</h3>
              <p className="text-gray-400 pl-8 md:pl-0">Adopted green-building practices across all new projects, focusing on rainwater harvesting and solar energy.</p>
            </div>
            
            {/* 2024 */}
            <div className="relative w-full md:w-1/2 md:ml-auto md:pl-12">
              <div className="absolute top-1 -left-[11px] w-5 h-5 rounded-full bg-brand-gold shadow-[0_0_10px_rgba(245,166,35,0.8)] z-10"></div>
              <div className="font-serif text-3xl font-bold text-brand-gold mb-2 pl-8 md:pl-0">2024</div>
              <h3 className="text-xl font-bold mb-2 pl-8 md:pl-0">Smart Living Legacy</h3>
              <p className="text-gray-400 pl-8 md:pl-0">Leading the industry with 50+ completed projects and launching AI-integrated smart homes of the future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Banner */}
      <section className="py-20 bg-gray-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Partner With Excellence</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Join our community of discerning homeowners and land investors. Let's build your legacy together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-gray-600 text-white font-semibold rounded hover:bg-gray-700 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
