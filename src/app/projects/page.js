import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Vishwa Priya Meadows",
      status: "Ongoing",
      price: "₹45L - 85L",
      location: "Whitefield, Bangalore",
      features: ["DTCP Approved", "Vastu Compliant"],
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      title: "Vishwa Priya Enclave",
      status: "Completed",
      price: "Sold Out",
      location: "Sarjapur, Bangalore",
      features: ["Gated Community", "Clubhouse"],
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      title: "Priya Green Vista",
      status: "Ongoing",
      price: "₹32L - 55L",
      location: "Devanahalli, Bangalore",
      features: ["Airport Vicinity", "Smart Plots"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      title: "Vishwa Priya Heights",
      status: "Ongoing",
      price: "₹60L - 1.2Cr",
      location: "Nandi Hills Road",
      features: ["Hill View", "Eco-Friendly"],
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      title: "Vishwa Priya Woods",
      status: "Completed",
      price: "Sold Out",
      location: "Bannerghatta Road",
      features: ["Forest View", "Rainwater Harvesting"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    },
    {
      id: 6,
      title: "Royal Orchid Plots",
      status: "Ongoing",
      price: "₹28L - 42L",
      location: "Kolar Road",
      features: ["High ROI", "Rapid Development"],
      image: "https://images.unsplash.com/photo-1592982537447-6f23b2024db2?auto=format&fit=crop&q=80",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-24">
      {/* Header Section */}
      <section className="pt-16 pb-12 px-4 max-w-7xl mx-auto w-full">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-4">
          Premium Plot Projects
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-10">
          Discover your future at Vishwa Priya Developers. We offer premium residential plots designed with precision, security, and world-class amenities in prime locations.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button className="px-6 py-2 bg-brand-navy text-white font-medium rounded-full hover:bg-blue-900 transition-colors">
            All Projects
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 border border-gray-300 font-medium rounded-full hover:border-brand-navy hover:text-brand-navy transition-colors">
            Ongoing
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 border border-gray-300 font-medium rounded-full hover:border-brand-navy hover:text-brand-navy transition-colors">
            Completed
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
              {/* Image & Badge */}
              <div className="relative h-56 w-full">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 backdrop-blur-md bg-black/30 border border-white/20`}>
                    {project.status === "Ongoing" ? (
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path></svg>
                    ) : (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    )}
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className={`font-semibold text-sm ${project.price === 'Sold Out' ? 'text-red-500' : 'text-gray-600'}`}>
                    {project.price}
                  </span>
                </div>
                
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  {project.location}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <Link href={`/projects/${project.id}`} className={`block w-full py-3 text-center rounded-lg font-medium transition-colors ${project.status === 'Ongoing' ? 'bg-gray-400 text-white hover:bg-gray-500' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                    {project.status === 'Ongoing' ? (
                      <span className="flex items-center justify-center gap-2">View Details &rarr;</span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        View Details
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                      </span>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
