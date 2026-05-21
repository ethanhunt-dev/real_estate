import Link from "next/link";

export default function ProjectView({ params }) {
  // In a real application, you would fetch project data based on params.id
  // Here we use static data matching the design.
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-end bg-gray-900 overflow-hidden pb-12">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        
        <div className="relative z-20 px-4 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-end gap-6">
          
          {/* Left Details */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#4caf50] text-white text-xs font-bold rounded-full mb-4 shadow-sm border border-[#3e8e41]">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              RERA Approved: PRM/KA/RERA/1251/308/PR/210322
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-2 drop-shadow-md">
              Emerald Meadows Elite
            </h1>
            <div className="flex items-center text-gray-200 text-sm font-medium">
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Sarjapur, Bangalore
            </div>
          </div>

          {/* Right Stats */}
          <div className="flex flex-wrap gap-4">
            <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center min-w-[120px]">
              <div className="text-xs text-gray-300 font-medium mb-1">Plot Sizes</div>
              <div className="text-sm font-bold text-white leading-tight">1200 - 2400<br/>Sq.Ft</div>
            </div>
            <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center min-w-[120px]">
              <div className="text-xs text-gray-300 font-medium mb-1">Total Area</div>
              <div className="text-sm font-bold text-white leading-tight">12<br/>Acres</div>
            </div>
            <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center min-w-[120px]">
              <div className="text-xs text-gray-300 font-medium mb-1">Total Units</div>
              <div className="text-sm font-bold text-white leading-tight">185<br/>Exclusive Plots</div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column (Details) */}
          <div className="lg:w-2/3 space-y-16">
            
            {/* Overview */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-brand-navy mb-6">Project Overview</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
                <p>
                  Emerald Meadows Elite is a sanctuary of luxury and tranquility nestled in the heart of Sarjapur, Bangalore's fastest-growing residential hub. Designed for those who seek the perfect balance between urban connectivity and natural serenity, this project offers meticulously planned residential plots with world-class infrastructure.
                </p>
                <p>
                  Our development emphasizes architectural precision and environmental harmony, featuring wide tree-lined avenues, underground cabling, and premium landscaping. Whether you're looking to build your dream home or a high-appreciation investment, Emerald Meadows Elite provides the ideal foundation for your future.
                </p>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-brand-navy mb-6">World-Class Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9", label: "Swimming Pool" },
                  { icon: "M4 6h16M4 10h16M4 14h16M4 18h16", label: "Modern Gym" },
                  { icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", label: "Themed Gardens" },
                  { icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z", label: "Sports Courts" },
                  { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: "Luxury Clubhouse" },
                  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "24/7 Security" }
                ].map((amenity, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-3 text-[#5873b3]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={amenity.icon}></path></svg>
                    </div>
                    <span className="font-bold text-gray-900 text-sm">{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Master Plan */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-brand-navy mb-6">Master Plan</h2>
              <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center">
                  {/* Master plan placeholder image */}
                </div>
              </div>
            </div>

            {/* Price List */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-brand-navy mb-6">Price List</h2>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-white uppercase bg-gray-500">
                    <tr>
                      <th scope="col" className="px-6 py-4 font-bold">Plot Dimension</th>
                      <th scope="col" className="px-6 py-4 font-bold">Area (Sq.Ft)</th>
                      <th scope="col" className="px-6 py-4 font-bold">Price (Approx)</th>
                      <th scope="col" className="px-6 py-4 font-bold text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">30' x 40'</td>
                      <td className="px-6 py-4 text-gray-600">1200</td>
                      <td className="px-6 py-4 font-semibold text-gray-900">₹54 Lakhs*</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-block px-3 py-1 bg-gray-400 text-white text-xs font-bold rounded-full">Available</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                      <td className="px-6 py-4 font-semibold text-gray-900">30' x 50'</td>
                      <td className="px-6 py-4 text-gray-600">1500</td>
                      <td className="px-6 py-4 font-semibold text-gray-900">₹67 Lakhs*</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-block px-3 py-1 bg-gray-400 text-white text-xs font-bold rounded-full">Available</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">40' x 60'</td>
                      <td className="px-6 py-4 text-gray-600">2400</td>
                      <td className="px-6 py-4 font-semibold text-gray-900">₹1.08 Cr*</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-block px-3 py-1 border border-gray-300 text-gray-600 bg-gray-50 text-xs font-bold rounded-full">Selling Fast</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Location Advantage */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-brand-navy mb-6">Location Advantage</h2>
              <div className="grid md:grid-cols-2 gap-6 items-stretch">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
                  {[
                    { icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z", title: "Indus International School", time: "10 Mins Drive" },
                    { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", title: "Manipal Hospital", time: "15 Mins Drive" },
                    { icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", title: "Wipro Corporate Office", time: "20 Mins Drive" },
                    { icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z", title: "Total Mall", time: "15 Mins Drive" }
                  ].map((loc, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1 text-[#5873b3]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={loc.icon}></path></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{loc.title}</h4>
                        <p className="text-xs text-gray-500 font-medium">{loc.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-[#2a2d36] rounded-xl overflow-hidden relative shadow-sm min-h-[250px]">
                   {/* Abstract Dark Map Placeholder */}
                   <div className="absolute inset-0 p-6 flex items-center justify-center">
                     <svg viewBox="0 0 200 200" className="w-full h-full opacity-60">
                        <path d="M50 100 L100 50 L150 100 L100 150 Z" stroke="#eab308" strokeWidth="1" fill="none" />
                        <path d="M20 80 L180 80" stroke="#eab308" strokeWidth="0.5" fill="none" />
                        <path d="M100 20 L100 180" stroke="#eab308" strokeWidth="0.5" fill="none" />
                        <circle cx="100" cy="100" r="4" fill="#eab308" />
                        <circle cx="50" cy="100" r="3" fill="#eab308" />
                        <circle cx="150" cy="100" r="3" fill="#eab308" />
                        <circle cx="100" cy="50" r="3" fill="#eab308" />
                        <circle cx="100" cy="150" r="3" fill="#eab308" />
                        <circle cx="120" cy="70" r="2" fill="#eab308" />
                        <circle cx="80" cy="130" r="2" fill="#eab308" />
                     </svg>
                   </div>
                </div>
              </div>
            </div>
            
          </div>

          {/* Right Column (Sidebar Form) */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="font-serif text-2xl font-bold text-brand-navy mb-3">Schedule a Site Visit</h3>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                Experience the premium plots firsthand. Our consultants are ready to assist you.
              </p>
              
              <form className="space-y-4 mb-8">
                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-navy text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-navy text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-1">Phone Number</label>
                  <input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-navy text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-1">Message (Optional)</label>
                  <textarea placeholder="Interested in 30x40 plots..." rows="3" className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-navy text-sm resize-none"></textarea>
                </div>
                
                <button type="submit" className="w-full py-3 mt-2 bg-[#f1a43a] hover:bg-yellow-500 text-brand-navy font-bold rounded-md transition-colors shadow-sm flex justify-center items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                  Get Instant Quote
                </button>
              </form>

              <div className="pt-6 border-t border-gray-100 space-y-3">
                <div className="flex items-center text-gray-900 text-sm font-bold">
                  <svg className="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  +91 80 1234 5678
                </div>
                <div className="flex items-center text-gray-900 text-sm font-bold">
                  <svg className="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  sales@vishwapriya.com
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
