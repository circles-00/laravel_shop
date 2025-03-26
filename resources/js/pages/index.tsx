import { ArrowRight } from "lucide-react"
import { useRef } from "react"

export default function HomePage() {
    const contactSectionRef = useRef<HTMLDivElement | null>(null)

    return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      <header className="container mx-auto px-4 py-6">
        <div className="relative z-10 flex justify-between items-center border-b border-white/10 pb-4">
          <div className="text-2xl font-serif tracking-wider">Luxurious Scent</div>
          <nav className="hidden md:flex space-x-12 text-sm uppercase tracking-widest">
            <a href="/" className="text-white relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/shop" className="text-zinc-400 hover:text-white relative group transition-colors">
              Shop
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <div className="md:hidden">
            <button className="text-white p-1 rounded-full hover:bg-white/10 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[85vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/hero.jpg"
              alt="Luxury perfume"
              className="object-cover opacity-60 w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

            {/* Shiny elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-300/20 rounded-full filter blur-[80px] animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[100px] animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-2xl animate-fade-in">
              <div className="inline-block rounded-lg bg-black/30 backdrop-blur-sm px-3 py-1 text-sm border border-white/10 mb-4">
                LUXURY COLLECTION
              </div>
              <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
                Discover Your <span className="italic text-gold-300">Signature</span> Scent
              </h1>
              <p className="text-lg md:text-xl text-zinc-300 mb-8 leading-relaxed">
                Crafted with precision and passion, our perfumes capture the essence of luxury and individuality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/shop"
                  className="inline-flex items-center px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-opacity-90 transition-all group"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <button
                onClick={() => contactSectionRef?.current?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-3 border border-white/30 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-24 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Signature Collection</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Meticulously crafted fragrances that embody elegance and sophistication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=600&width=450&text=Perfume%20${item}`}
                    alt={`Featured perfume ${item}`}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-serif mb-2">Celestial Bloom {item}</h3>
                  <p className="text-zinc-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    A captivating blend of exotic florals and warm amber.
                  </p>
                  <a
                    href="/shop"
                    className="text-sm font-medium underline underline-offset-4 hover:text-gold-300 transition-colors"
                  >
                    Discover More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shiny Effect Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[100px] animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
                Crafted with <span className="italic">Passion</span>, Worn with{" "}
                <span className="italic">Confidence</span>
              </h2>
              <p className="text-lg text-zinc-300 mb-10">
                Each bottle contains more than just fragrance—it holds an experience, a memory waiting to be created.
              </p>
              <a
                href="/shop"
                className="inline-flex items-center px-8 py-3 border border-white/30 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                Shop Now
              </a>
            </div>
          </div>
        </section>

        <section ref={contactSectionRef} id="contact" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gold-300 rounded-full filter blur-[120px] animate-pulse"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif mb-4">Connect With Us</h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  Follow us on social media or reach out directly to discover exclusive offers and the latest additions
                  to our collection.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/5 flex flex-col items-center text-center hover:border-gold-300/30 transition-colors group">
                  <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-zinc-800/80 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gold-300"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">X / Twitter</h3>
                  <p className="text-zinc-400 mb-4">Follow us for the latest updates</p>
                  <a href="https://twitter.com/essence" target="_blank" className="text-gold-300 hover:underline">
                    @luxurious-scent
                  </a>
                </div>

                <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/5 flex flex-col items-center text-center hover:border-gold-300/30 transition-colors group">
                  <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-zinc-800/80 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gold-300"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Instagram</h3>
                  <p className="text-zinc-400 mb-4">Discover our visual stories</p>
                  <a
                    href="https://instagram.com/essence_perfumes"
                    target="_blank"
                    className="text-gold-300 hover:underline"
                  >
                    @luxurious-scent
                  </a>
                </div>

                <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/5 flex flex-col items-center text-center hover:border-gold-300/30 transition-colors group">
                  <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-zinc-800/80 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gold-300"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Facebook</h3>
                  <p className="text-zinc-400 mb-4">Join our community</p>
                  <a
                    href="https://facebook.com/essenceperfumes"
                    target="_blank"
                    className="text-gold-300 hover:underline"
                  >
                    @luxurious-scent
                  </a>
                </div>
              </div>

              <div className="mt-16 text-center">
                <div className="inline-flex items-center justify-center p-6 bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gold-300 mr-3"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span className="text-lg">contact@luxurious-scent.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-serif tracking-wider mb-6 md:mb-0">Luxurious Scent</div>
            <div className="flex space-x-8 text-sm text-zinc-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact Us
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-zinc-500 text-sm">
            © {new Date().getFullYear()} Luxurious Scent. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
    )
}
