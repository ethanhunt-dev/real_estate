import Link from "next/link";

export default function Gallery() {
  const images = [
    {
      id: 1,
      category: "Site Development",
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
      alt: "Construction site with crane"
    },
    {
      id: 2,
      category: "Project Photos",
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
      alt: "Premium residential house"
    },
    {
      id: 3,
      category: "Events",
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
      alt: "Elegant event space"
    },
    {
      id: 4,
      category: "Awards",
      src: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&q=80",
      alt: "Award trophy"
    },
    {
      id: 5,
      category: "Site Development",
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      alt: "Highway infrastructure"
    },
    {
      id: 6,
      category: "Project Photos",
      src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80",
      alt: "Modern interior design"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-surface-base">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/60 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        
        <div className="relative z-20 text-center px-4 max-w-3xl mx-auto mt-8">
          <h1 className="font-serif hero-title text-white font-bold mb-6 drop-shadow-md">
            Gallery
          </h1>
          <p className="body-lg text-surface-2 drop-shadow">
            Discover the artistry of architectural precision and the legacy of our premium residential developments.
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 px-4 max-w-7xl mx-auto w-full">
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button className="px-[28px] py-[10px] bg-primary text-white font-semibold rounded-md shadow-soft hover:shadow-md hover:-translate-y-[2px] hover:bg-[#5A2EE0] transition-all duration-150 text-sm">
            All
          </button>
          <button className="px-[28px] py-[10px] bg-surface-base text-text-secondary border border-border font-semibold rounded-md hover:border-primary hover:text-primary transition-all duration-150 text-sm">
            Project Photos
          </button>
          <button className="px-[28px] py-[10px] bg-surface-base text-text-secondary border border-border font-semibold rounded-md hover:border-primary hover:text-primary transition-all duration-150 text-sm">
            Site Development
          </button>
          <button className="px-[28px] py-[10px] bg-surface-base text-text-secondary border border-border font-semibold rounded-md hover:border-primary hover:text-primary transition-all duration-150 text-sm">
            Events
          </button>
          <button className="px-[28px] py-[10px] bg-surface-base text-text-secondary border border-border font-semibold rounded-md hover:border-primary hover:text-primary transition-all duration-150 text-sm">
            Awards
          </button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-soft hover:shadow-md border border-border transition-all duration-200 group cursor-pointer hover:-translate-y-1"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${image.src})` }}
              ></div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>
              
              {/* Optional hover overlay with category name */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-4 py-2 bg-surface-base text-primary text-sm font-bold tracking-wider uppercase rounded-md shadow-soft transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}
