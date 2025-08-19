"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaAngular, FaPython } from "react-icons/fa"
import { TbBrandCSharp, TbBrandCpp } from "react-icons/tb";

import {
    SiTailwindcss, SiNextdotjs
} from "react-icons/si"


//publikációk, konferenciák
const pubkonf = {
    title: "Publikációk, konferenciák",
    description: "Megjelent tanulmányok, konferencia-előadások és kutatási kiadványok.",
    items: [
        {
            title: "A neurális hálózatok fejlődése és alkalmazása a modern mesterséges intelligenciában ",
            subtitle: "Smart Law Research Group – Working Paper No. 2 (2025)",
            type: "Tanulmány",
            venue: "Smart Law Research Group, Lébény",
            year: "2025",
            link: "https://www.smartlawresearch.hu/storage/app/media/Kiadvanyok/slrgwp_2-2025.pdf"
        },
    ]
}

//about
const about = {
    title: 'Magamról'
}


//Tanfolyamok, kuruzsok
const tanfkur = {
    title: 'Tanfolyamok, kurzusok',
    description: 'Általam elvégzett kurzusok illetve tanfolyamok, melyek tanusítványt adtak.',
    items: [
        {
            institution: "CISCO Networking Academy",
            degree: "CCNA1 Course"
        },
        {
            institution: "CISCO Networking Academy",
            degree: "CCNA2 Course"
        },
        {
            institution: "CISCO Networking Academy",
            degree: "IT Essentials"
        },
        {
            institution: "CISCO Networking Academy",
            degree: "Python essentials"
        },
        {
            institution: "Udemy",
            degree: "CompTIA Security+"
        },
        {
            institution: "Udemy",
            degree: "Digital marketing"
        },
        {
            institution: "Udemy",
            degree: "Sales essentials"
        },
        {
            institution: "Udemy",
            degree: "Ai lead generation"
        }

    ]
}

//TAPASZTALATOK ISMERETEK

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'Szakmai tapasztalat',
    description: "Szakmai tapasztalataim bemutatása, kiemelve a különböző pozíciókat és az iparágakat, ahol dolgoztam. Bővebb információ a részletesn önéletrajzomban.",
    items: [
        {
            company: "Avatao Innovative Learning Kft.",
            position: "Engineering support",
            duration: "2025-Present "
        },
        {
            company: "Széchenyi István Egyetem",
            position: "Külsős szakértő",
            duration: "2024-Present "
        },
        {
            company: "Stäubli Robotics",
            position: "Business developer",
            duration: "2024"
        },
        {
            company: " Mobilis ",
            position: "Demonstrátor",
            duration: "2022-2023"
        },
        {
            company: "MetMax Europe ",
            position: "Diák munkatárs",
            duration: "2022"
        },
        {
            company: "Freelancer",
            position: "EV.",
            duration: "2021-Present"
        },
        {
            company: "McDonald’s Corp",
            position: "Éttermi munkatárs",
            duration: "2017-2022"
        },
    ]
}

// TANULMÁNYOK

const education = {
    icon: '/assets/resume/cap.svg',
    title: 'Végzettségek, tanulmányok',
    description: "Szakmai és oktatási hátterem bemutátsa, programozás és a sport területén szerzett tapasztalataim. Bővebb információ a részletes önéletrajzomban.",
    items: [
        {
            institution: "Testnevelési Egyetem",
            degree: "Kézilabda edző (C licence)",
            duration: "2025 - "
        },
        {
            institution: "Testnevelési Egyetem",
            degree: "Kézilabda edző (D licence)",
            duration: "2024 - 2025"
        },
        {
            institution: "Széchenyi István Egyetem",
            degree: "Mérnökinformatika Bsc.",
            duration: "2021 - "
        },
        {
            institution: "GYSZC Jedlik Ányos Technikum",
            degree: "CAD-CAM informatikus",
            duration: "2021 - 2022"
        },
        {
            institution: "Kézilabda szövetség",
            degree: "Játékvezető",
            duration: "2019"
        },
        {
            institution: "GYSZC Jedlik Ányos Technikum",
            degree: "Érettségi",
            duration: "2017 - 2021"
        },
    ]
}

//KOMPETENCIÁK

const skills = {
    title: "Készségek",
    description: "Általam leginkább ismert, és használatos programozási nyelvek.",
    skilllist: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
            desc: "A weboldalak felépítéséért felelős jelölőnyelv. Az ötödik verzió új lehetőségeket kínál a multimédiás tartalmak kezelésére, és nagy hangsúlyt fektet a reszponzív dizájnra és a mobilbarát oldalak kialakítására.",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
            desc: "A weboldalak stílusának, megjelenésének formázására szolgál. A harmadik verzió újításai közé tartoznak a rugalmas elrendezések, animációk, és az átmenetek, melyek dinamikusabbá teszik a webes élményt.",
        },
        {
            icon: <FaJs />,
            name: "javascript",
            desc: "Egy népszerű programozási nyelv, amelyet interaktív és dinamikus weboldalak készítéséhez használnak. Képes kezelni az eseményeket, kommunikálni a szerverrel, és frissíteni az oldalak tartalmát anélkül, hogy újratöltenék azokat.",
        },
        {
            icon: <FaReact />,
            name: "react.js",
            desc: "Egy nyílt forráskódú JavaScript könyvtár, amelyet főként felhasználói felületek (UI) készítéséhez használnak. A komponensalapú struktúra lehetővé teszi a kód újrafelhasználását és a hatékony alkalmazásfejlesztést.",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
            desc: "Egy React alapú keretrendszer, amely egyszerűsíti a szerveroldali renderelést és a statikus weboldalak készítését. Különösen népszerű az optimalizált teljesítmény és a SEO-barát felépítése miatt.",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
            desc: "Egy utilitarista CSS keretrendszer, amely gyors, moduláris stílusok létrehozását teszi lehetővé. Az osztályok használatával minimális CSS kódolás szükséges, és könnyen testre szabható megjelenéseket biztosít.",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
            desc: "Egy szerveroldali JavaScript környezet, amely lehetővé teszi a nagy teljesítményű, skálázható webes alkalmazások építését. Különösen hatékony I/O-intenzív alkalmazásoknál.",
        },
        {
            icon: <FaFigma />,
            name: "figma",
            desc: "Egy online tervezőeszköz, amely lehetővé teszi a kollaboratív webes és mobilos felhasználói felületek tervezését. Különösen népszerű a csapatmunka és a prototípus-készítés miatt.",
        },
        {
            icon: <FaAngular />,
            name: "angular",
            desc: "Angular egy TypeScript-alapú keretrendszer, amely lehetővé teszi dinamikus és skálázható webes alkalmazások fejlesztését. Különösen népszerű csapatok körében az újrafelhasználható komponensek, a moduláris fejlesztés és a gyors prototípus-készítés miatt.",
        },
        {
            icon: <FaPython />,
            name: "python",
            desc: "Python egy sokoldalú, könnyen tanulható programozási nyelv, amelyet széles körben használnak webfejlesztésre, adatelemzésre, gépi tanulásra és automatizálásra. Egyszerű szintaxisa és gazdag könyvtárai miatt népszerű mind kezdők, mind profi fejlesztők körében.",
        },
        {
            icon: <TbBrandCpp />,
            name: "C++",
            desc: "C++ egy nagy teljesítményű, általános célú programozási nyelv, amelyet rendszerprogramozásra, játékmotorokra, grafikai alkalmazásokra és nagy igénybevételű szoftverek fejlesztésére használnak. Objektumorientált és alacsony szintű vezérlést biztosít, miközben hatékony és optimalizált kód írását teszi lehetővé.",
        },
        {
            icon: <TbBrandCSharp />,
            name: "C#",
            desc: "C# egy objektumorientált programozási nyelv, amelyet a Microsoft fejlesztett ki, és elsősorban a .NET keretrendszerrel való használatra terveztek. Ideális asztali, webes és mobilalkalmazások fejlesztésére, valamint játékfejlesztésre a Unity motorral. Erőteljes és jól strukturált nyelv, amely támogatja a modern programozási paradigmákat.",
        },
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { ScrollArea } from "@/components/ui/scroll-area"

import { motion } from "framer-motion"


const Resume = () => {
    return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }, }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
        <div className="container mx-auto">
            {/* <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold">Miért engem?</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">asdasd</p>
            </div> */}
            <Tabs defaultValue="Magamról" className="flex flex-col xl:flex-row gap-[60px]">
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="Magamról">Magamról</TabsTrigger>
                    <TabsTrigger value="Szakmai tapasztalat">Szakmai tapasztalat</TabsTrigger>
                    <TabsTrigger value="Végzettségek, tanulmányok">Végzettségek, tanulmányok</TabsTrigger>
                    <TabsTrigger value="Kompetenciák">Készségek</TabsTrigger>
                    <TabsTrigger value="Tanfkur">Tanfolyamok, kurzusok</TabsTrigger>
                    <TabsTrigger value="Pubkonf">Publikációk, konferenciák</TabsTrigger>

                </TabsList>

                {/* TARTALOM */}

                <div className="min-h-[70vh] w-full">
                    {/* TAPASZTALAT */}
                    <TabsContent value="Szakmai tapasztalat" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item, index) => {
                                        return (<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px text-center lg:text-left">{item.position}</h3>
                                            <div className="flex items-center gap-3">
                                                {/* dot */}
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.company}</p>
                                            </div>
                                        </li>
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>


                    {/* OKTATÁS */}
                    <TabsContent value="Végzettségek, tanulmányok" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item, index) => {
                                        return (<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px text-center lg:text-left">{item.degree}</h3>
                                            <div className="flex items-center gap-3">
                                                {/* dot */}
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.institution}</p>
                                            </div>
                                        </li>
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>

                    {/* KOMPETENCIÁK */}
                    <TabsContent value="Kompetenciák" className="w-full h-full">
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                            </div>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                                {skills.skilllist.map((skill, index) => {
                                    return (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="relative w-full h-[100px] sm:h-[120px] lg:h-[130px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="flex flex-col items-center">
                                                            <div className="text-5xl lg:text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                            <p className="capitalize text-sm lg:text-base">{skill.name}</p>
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent
                                                        className="absolute bottom-full mb-2 w-[600px] p-2 bg-primary text-accent rounded-md border-accent shadow-lg z-50"
                                                        style={{ left: "50%", transform: "translateX(-50%)" }}
                                                    >
                                                        {skill.desc}
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </TabsContent>





                    {/* MAGAMRÓL */}
                    <TabsContent value="Magamról" className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">{about.description}</p>
                            <div className="italic">
                                <h3 className="text-2xl font-bold">Szia, üdvözöllek!</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                                    Márk vagyok, a Széchenyi István Egyetem Mérnökinformatika BSc hallgatója. Középiskolás éveim óta foglalkozom programozással, azóta folyamatosan bővítem tudásomat.
                                </p>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify mt-4">
                                    Az informatika világa mindig is lenyűgözött, jelenleg főként a fullstack fejlesztés és a mesterséges intelligencia területei érdekelnek. Terveim között szerepel Mérnökinformatika MSc és Kiberbiztonság MSc végzettségek megszerzése is.
                                </p>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify mt-4">
                                    A sport szintén fontos része az életemnek: 2010 óta kézilabdázom, és az évek során megtanultam, hogy a kitartás, a csapatmunka és a fejlődés iránti vágy az élet minden területén kulcsszerepet játszik.
                                </p>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify mt-4">
                                    Szabadidőmben szívesen olvasok IT témájú és fantasy könyveket, és mindig keresem az új kihívásokat, amelyek segítenek fejlődni szakmailag és emberileg is.
                                </p>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify mt-4">
                                    Hosszú távú célom saját vállalkozás létrehozása, valamint olyan projektekben való részvétel, amelyek szakmai és társadalmi értéket is teremtenek. Ha kíváncsi vagy a munkáimra vagy együttműködnél velem, keress bátran!
                                </p>
                            </div>
                        </div>
                    </TabsContent>



                    {/* Tanfolyamok kurzusok */}
                    <TabsContent value="Tanfkur" className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{tanfkur.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">{tanfkur.description}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {tanfkur.items.map((item, index) => {
                                        return (<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <h3 className="text-xl max-w-[260px] min-h-[60px text-center lg:text-left">{item.degree}</h3>
                                            <div className="flex items-center gap-3">
                                                {/* dot */}
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.institution}</p>
                                            </div>
                                        </li>
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>


                    {/* Publikációk konferenciák */}

                    <TabsContent value="Pubkonf" className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{pubkonf.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">{pubkonf.description}</p>

                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {pubkonf.items.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="bg-[#232329] py-6 px-8 rounded-xl flex flex-col justify-start items-center lg:items-start gap-2"
                                            >
                                                <h3 className="text-lg font-semibold text-center lg:text-left">{item.title}</h3>
                                                {item.subtitle && (
                                                    <p className="text-white/80 text-sm italic text-center lg:text-left">
                                                        {item.subtitle}
                                                    </p>
                                                )}
                                                <div className="flex flex-col gap-1 text-white/60 text-sm text-center lg:text-left">
                                                    <p>{item.type} – {item.year}</p>
                                                    <p>{item.venue}</p>
                                                    {item.link && (
                                                        <a
                                                            href={item.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-accent underline"
                                                        >
                                                            Megnyitás
                                                        </a>
                                                    )}
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>


                </div>

            </Tabs>
        </div>
    </motion.div>
}




export default Resume