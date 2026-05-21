import Link from "next/link";

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="pt-24 pb-16 px-4 max-w-4xl mx-auto text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white opacity-50 blur-3xl rounded-full pointer-events-none"></div>
        <div className="relative z-10">
          <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Luxury Living Solutions</span>
          <h1 className="font-serif text-5xl font-bold text-brand-navy mt-4 mb-6">Our Expertise</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We combine architectural precision with sustainable practices to create premium residential experiences that stand the test of time.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 px-4 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Strategic Plotting */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
            <div className="h-64 relative bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80')] bg-cover bg-center">
              <div className="absolute bottom-4 left-4 w-10 h-10 bg-black/40 backdrop-blur-md rounded-lg flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-navy transition-colors">Strategic Plotting</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Expertly curated residential plots in high-growth corridors, ensuring long-term appreciation and a perfect foundation for your dream home.
              </p>
              <Link href="/services/strategic-plotting" className="text-brand-navy font-semibold hover:text-blue-700 transition-colors inline-flex items-center text-sm">
                Learn More <span className="ml-1 text-lg leading-none">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Premium Construction */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
            <div className="h-64 relative bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center">
              <div className="absolute bottom-4 left-4 w-10 h-10 bg-black/40 backdrop-blur-md rounded-lg flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-navy transition-colors">Premium Construction</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Turning architectural visions into reality using superior materials, modern engineering techniques, and uncompromising quality standards.
              </p>
              <Link href="/services" className="text-brand-navy font-semibold hover:text-blue-700 transition-colors inline-flex items-center text-sm">
                Learn More <span className="ml-1 text-lg leading-none">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Organic Farmlands */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
            <div className="h-64 relative bg-[url('https://images.unsplash.com/photo-1592982537447-6f23b2024db2?auto=format&fit=crop&q=80')] bg-cover bg-center">
              <div className="absolute bottom-4 left-4 w-10 h-10 bg-black/40 backdrop-blur-md rounded-lg flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-navy transition-colors">Organic Farmlands</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Sustainable living opportunities with professionally managed farmlands, offering high ROI and a tranquil escape from urban life.
              </p>
              <Link href="/services" className="text-brand-navy font-semibold hover:text-blue-700 transition-colors inline-flex items-center text-sm">
                Learn More <span className="ml-1 text-lg leading-none">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ready Banner */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#425d90] rounded-3xl overflow-hidden relative shadow-2xl">
            {/* Decorative shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute -top-24 -left-24 w-96 h-96 border border-white/10 rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
            </div>
            
            <div className="px-12 py-16 md:py-20 md:px-20 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="font-serif text-4xl font-bold text-white mb-4">Ready to start your journey?</h2>
                <p className="text-blue-100 text-lg">
                  Contact our specialist consultants to discuss your requirements and find the perfect property solution.
                </p>
              </div>
              <button className="flex-shrink-0 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded backdrop-blur-sm border border-white/20 transition-colors">
                Schedule A Visit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
