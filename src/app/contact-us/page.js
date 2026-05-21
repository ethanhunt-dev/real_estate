export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen bg-surface-base">
      {/* Hero Section */}
      <section className="relative w-full h-[350px] flex items-center justify-center bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-dark/80 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        
        <div className="relative z-20 text-center px-4 max-w-3xl mx-auto mt-8">
          <h1 className="font-serif hero-title text-white font-bold mb-4 drop-shadow-md">
            Get in Touch
          </h1>
          <p className="body-lg text-surface-2 drop-shadow">
            We are here to help you build your legacy. Reach out to our experts for site visits, project enquiries, or investment advice.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full relative z-30 -mt-10">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Contact Information */}
          <div className="lg:w-1/3 pt-10">
            
            {/* Corporate Office */}
            <div className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-dark mb-4">Corporate Office</h2>
              <div className="flex items-start">
                <svg className="flex-shrink-0 h-6 w-6 text-primary mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-text-secondary body-text">
                  Level 8, Elite Square, 45 Architecture Way,<br />
                  Business District, Bengaluru, Karnataka 560001
                </p>
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-dark mb-4">Phone & WhatsApp</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-primary mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-text-secondary font-medium body-text">+91 98765 43210</span>
                </li>
                <li className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-primary mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="text-text-secondary font-medium body-text">+91 80123 45678 (WhatsApp)</span>
                </li>
              </ul>
            </div>

            {/* Email Addresses */}
            <div className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-dark mb-4">Email Addresses</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-primary mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-text-secondary font-medium body-text">sales@vishwapriya.com</span>
                </li>
                <li className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-primary mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span className="text-text-secondary font-medium body-text">support@vishwapriya.com</span>
                </li>
              </ul>
            </div>

            {/* Office Hours */}
            <div className="bg-surface-1 rounded-xl shadow-soft border border-border p-6">
              <h3 className="font-bold text-lg text-dark mb-4 border-b border-border pb-2">Office Hours</h3>
              <ul className="space-y-3 text-sm font-medium">
                <li className="flex justify-between text-text-secondary">
                  <span>Mon - Fri:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between text-text-secondary">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between text-[#E02E2E] font-bold">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
            
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-surface-1 rounded-2xl shadow-lg p-8 md:p-12 border border-border">
              <h2 className="font-serif section-h2 font-bold text-dark mb-8">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-bold text-dark mb-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-4 py-3 bg-surface-base border border-border rounded-lg text-dark focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 placeholder-text-tertiary transition-all" 
                    />
                  </div>
                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-bold text-dark mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 00000 00000" 
                      className="w-full px-4 py-3 bg-surface-base border border-border rounded-lg text-dark focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 placeholder-text-tertiary transition-all" 
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-bold text-dark mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 bg-surface-base border border-border rounded-lg text-dark focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 placeholder-text-tertiary transition-all" 
                  />
                </div>

                {/* Interested In */}
                <div>
                  <label className="block text-sm font-bold text-dark mb-2">Interested In</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 bg-surface-base border border-border rounded-lg text-dark appearance-none focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all">
                      <option>Premium Residential Plots</option>
                      <option>Villa Projects</option>
                      <option>Organic Farmlands</option>
                      <option>Investment Opportunities</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-tertiary">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Your Message */}
                <div>
                  <label className="block text-sm font-bold text-dark mb-2">Your Message</label>
                  <textarea 
                    placeholder="How can we help you today?" 
                    rows="4"
                    className="w-full px-4 py-3 bg-surface-base border border-border rounded-lg text-dark focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 placeholder-text-tertiary resize-none transition-all"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-primary text-white font-bold text-lg rounded-lg hover:-translate-y-[2px] transition-all shadow-soft focus:outline-none focus:ring-[3px] focus:ring-primary/20"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative w-full h-[400px] mt-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 grayscale" />
        <div className="absolute inset-0 bg-white/60" />
        
        <div className="relative z-10 w-full h-full flex items-center justify-center">
           {/* Custom Map Pin UI */}
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="relative w-24 h-24 mb-2 animate-bounce">
              <svg viewBox="0 0 24 24" fill="#1A1A1A" xmlns="http://www.w3.org/2000/svg" className="w-full h-full filter drop-shadow-xl">
                <path d="M12 21.5C12 21.5 20.5 14.5 20.5 9.5C20.5 4.80558 16.6944 1 12 1C7.30558 1 3.5 4.80558 3.5 9.5C3.5 14.5 12 21.5 12 21.5Z" />
                <circle cx="12" cy="9" r="4" fill="white"/>
              </svg>
            </div>
            
            <div className="bg-surface-1 px-6 py-3 rounded-xl shadow-lg border border-border flex items-center gap-3 transform transition-transform group-hover:scale-105">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <div>
                <div className="font-bold text-dark text-sm leading-tight">Vishwa Priya HQ</div>
                <div className="text-xs text-text-tertiary font-semibold mt-0.5">Click for directions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
