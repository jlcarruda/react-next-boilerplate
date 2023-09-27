'use client'

import Image from 'next/image'
import { Disclosure } from "@headlessui/react"

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-red-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}