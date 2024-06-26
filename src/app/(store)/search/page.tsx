import Link from 'next/link'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { Product } from '@/data/types/product'
import { api } from '@/data/api '

interface SearchProps {
  searchParams: {
    q: string
  }
}

async function serachProducts(query: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60,
    },
  })
  const products = await response.json()
  return products
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams

  if (!query) return redirect('/')

  const products = await serachProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => {
          return (
            <Link
              className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
              href={`/product/${product.slug}`}
              key={product.id}
            >
              <Image
                src={product.image}
                className="group-hover:scale-105 transition-transform duration-500"
                alt=""
                width={480}
                height={480}
                quality={100}
              />

              <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
                <span className="text-sm truncate">{product.title}</span>
                <span className="flex h-full items-center justify-center rounded-full bg-yellow-700 px-4 font-semibold">
                  {product.price.toLocaleString('pt-BR', {
                    currency: 'BRL',
                    style: 'currency',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
