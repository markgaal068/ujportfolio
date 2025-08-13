"use client"

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'

const links = [
    {
        name: 'főoldal',
        path: "/",
    },
    {
        name: 'Díjszabás',
        path: "/prices",
    },
    {
        name: 'önéletrajz',
        path: "/resume",
    },
    {
        name: 'munkáim',
        path: "/work",
    },
    {
        name: 'kapcsolat',
        path: "/contact",
    },
    {
        name: "órarend",
        path: "/schedule",
    }
]


const MobileNav = () => {
    const pathname = usePathname()
    return <Sheet>
        <SheetTrigger>
            <CiMenuFries className='text-[32px] text-accent' />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            {/* LOGO része */}
            <div className='mt-32 mb-40 text-center text-2xl'>
                <Link href="/">
                    <h1 className='text-4xl font-semibold'>Gaál <span className='text-accent'>Márk</span></h1>
                </Link>
            </div>

            {/* navbar része */}
            <nav className='flex flex-col justify-center items-center gap-8'>
                {links.map((link, index) => {
                    return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>{link.name}</Link>
                })}
            </nav>

        </SheetContent>
    </Sheet>
}

export default MobileNav