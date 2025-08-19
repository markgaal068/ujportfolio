"use client"

import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'

const links = [
    { name: 'főoldal', path: "/" },
    { name: 'Díjszabás', path: "/prices" },
    { name: 'önéletrajz', path: "/resume" },
    { name: 'munkáim', path: "/work" },
    { name: 'kapcsolat', path: "/contact" },
    { name: "órarend", path: "/schedule" }
]

const MobileNav = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
                <CiMenuFries className='text-[32px] text-accent' />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* LOGO része */}
                <div className='mt-24 mb-24 text-center text-2xl'>
                    <Link href="/" onClick={() => setIsOpen(false)}>
                        <h1 className='text-4xl font-semibold'>Gaál <span className='text-accent'>Márk</span></h1>
                    </Link>
                </div>

                {/* navbar része */}
                <nav className='flex flex-col justify-center items-center gap-6'>
                    {links.map((link, index) => (
                        <Link 
                            href={link.path} 
                            key={index} 
                            className={`${link.path === pathname ? "text-accent border-b-2 border-accent" : ""} text-xl capitalize hover:text-accent transition-all`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
