import Link from "next/link"
import { button } from "./ui/button"


//Komponens importok
import Nav from "./Nav"
import { Button } from "./ui/button"
import MobileNav from "./MobileNav"

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">


                {/*LOGÓ / ARCULAT*/}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">Gaál <span className="text-accent">Márk</span></h1>
                </Link>

                {/*ASZTALI NÉZET NAVBAR & hire me gomb*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Keress fel!</Button>
                    </Link>
                </div>


                {/*MOBIL NÉZET NAVBAR*/}
                <div className="xl:hidden">
                    <MobileNav />
                </div>

            </div>
        </header>
    )
}

export default Header