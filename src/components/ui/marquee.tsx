import React from 'react'

// Ubah { items: string[] } menjadi { items: React.ReactNode[] }
export default function Marquee({ items }: { items: React.ReactNode[] }) {
  return (
    <div className="relative flex w-screen left-1/2 -translate-x-1/2 overflow-x-hidden border-b-2 border-t-2 border-border bg-secondary-background text-foreground font-base">
      
      {/* Bagian Pertama */}
      <div className="animate-marquee whitespace-nowrap py-12 flex items-center">
        {items.map((item, index) => (
          <div key={index} className="mx-10 flex items-center">
            {item}
          </div>
        ))}
      </div>

      {/* Bagian Kedua (untuk looping yang mulus) */}
      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-12 flex items-center">
        {items.map((item, index) => (
          <div key={index} className="mx-10 flex items-center">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
