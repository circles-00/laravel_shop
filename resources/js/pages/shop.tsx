import { TPageProps } from "@/types"
import { getStorageUrl } from "@/utils/constants"
import { usePage } from "@inertiajs/react"
import { ShoppingCart } from "lucide-react"
import { useEffect, useMemo, useState } from "react"

interface IPerfume {
    id: number
    name: string
    price: number
    quantity: number
    picture: string
}

interface ICategory {
    id: number
    name: string
}

interface IShopPageProps extends TPageProps {
    perfumes: IPerfume[]
    categories: ICategory[]
}


type TPriceDirection = 'asc' | 'desc'

interface IParams {
    categoryId?: string
    price?: TPriceDirection
}

export default function ShopPage() {
    const { perfumes, categories } = usePage<IShopPageProps>().props
    const [params, setParams] = useState<IParams | null>(null)

    const initialParams = useMemo(() => new URLSearchParams(window.location.search), [])

    const categoryId = initialParams.get("categoryId")
    const priceSortDirection = initialParams.get("price")

    useEffect(() => {
        const newUrl = new URL(window.location.href)
        let areDifferent = false

        for(const [key, value] of Object.entries(params ?? {})) {
            if(`${value}` !== initialParams.get(key)) {
                newUrl.searchParams.set(key, `${value}`)
                areDifferent = true
                break
            }
        }

        if(areDifferent) {
            console.log("ROUTING")
            window.location.href = newUrl.toString()
        }
    }, [params, initialParams])

    const onChangeCategory = (categoryId: string) => {
        setParams({...params, categoryId})
    }

    const onChangePriceSort = (direction: TPriceDirection) => {
        setParams({...params, price: direction})
    }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      <header className="container mx-auto px-4 py-6">
        <div className="relative z-10 flex justify-between items-center border-b border-white/10 pb-4">
          <div className="text-2xl font-serif tracking-wider">LUXURIOUS SCENT</div>
          <nav className="hidden md:flex space-x-12 text-sm uppercase tracking-widest">
            <a href="/" className="text-zinc-400 hover:text-white relative group transition-colors">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/shop" className="text-white relative group">
              Shop
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 hover:bg-white/10 rounded-full transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-gold-300 text-black text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>
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
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Collection</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Explore our exquisite range of handcrafted fragrances, each telling a unique story.
          </p>
        </div>

        <div className="flex flex-wrap mb-8">
          <div className="w-full md:w-auto flex flex-wrap gap-2 mx-auto md:mx-0 mb-4 md:mb-0">
            {categories?.map(({id, name}) => (
                <button onClick={() => onChangeCategory(`${id}`)} key={id} className={`${id}` === categoryId || (!categoryId && !id) ? "cursor-pointer px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-full text-sm transition-colors" : "px-4 py-2 hover:bg-zinc-800 rounded-full text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer"}>
                {name}
                </button>
            ))}
          </div>
          <div className="w-full md:w-auto md:ml-auto">
            <select value={priceSortDirection ?? ""} onChange={({target: {value}}) => onChangePriceSort(value as TPriceDirection)} className="bg-zinc-800 text-white px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white/20">
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {perfumes.map((perfume) => (
            <div key={perfume.id} className="group">
              <div className="relative aspect-square overflow-hidden bg-zinc-800 rounded-lg mb-4">
                <img
                  src={getStorageUrl(perfume.picture) ?? "/placeholder.svg"}
                  alt={perfume.name}
                  className="object-cover transition-transform duration-500 group-hover:scale-105 w-full h-full"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    Quick View
                  </button>
                </div>
                {perfume.quantity <= 20 && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    Low Stock
                  </div>
                )}
              </div>
              <h3 className="text-lg font-medium mb-1">{perfume.name}</h3>
              <div className="flex justify-between items-center">
                <p className="text-zinc-300">${perfume.price.toFixed(2)}</p>
                <p className="text-sm text-zinc-500">{perfume.quantity} available</p>
              </div>
              <button className="w-full mt-3 py-2 border border-white/30 rounded-md hover:bg-white hover:text-black transition-colors text-sm font-medium flex items-center justify-center">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-zinc-800 py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-serif tracking-wider mb-6 md:mb-0">ESSENCE</div>
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
            © {new Date().getFullYear()} ESSENCE. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

