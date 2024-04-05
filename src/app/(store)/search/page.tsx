import Link from 'next/link'
import Image from 'next/image'

export default function Search() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para <span className="font-semibold">moletom</span>
      </p>

      <div className="grid grid-cols-3 gaap-6">
        <Link
          className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
          href={`/product/moletom-never-stop-learning`}
        >
          <Image
            src="/moletom-never-stop-learning.png"
            className="group-hover:scale-105 transition-transform duration-500"
            alt=""
            width={480}
            height={480}
            quality={100}
          />

          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">
              Moletom Never Stop Learning
            </span>
            <span className="flex h-full items-center justify-center rounded-full bg-yellow-700 px-4 font-semibold">
              {Number(129).toLocaleString('pt-BR', {
                currency: 'BRL',
                style: 'currency',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
