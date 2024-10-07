"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa"

import {
    SiTailwindcss, SiNextdotjs
} from "react-icons/si"


//ALAPADATOK

const about = {
    title: 'Magamról'
}

//TAPASZTALATOK ISMERETEK

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'Szakmai tapasztalat',
    description: "Szakmai tapasztalataim bemutatása, kiemelve a különböző pozíciókat és az iparágakat, ahol dolgoztam. Bővebb információ a részletesn önéletrajzomban.",
    items: [
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
            duration: "2021-"
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
            degree: "Kézilabda edző (D licence)",
            duration: "2024 -"
        },
        {
            institution: "Széchenyi István Egyetem",
            degree: "Mérnökinformatika bsc.",
            duration: "2021 - "
        },
        {
            institution: "GYSZC Jedlik Ányos Technikum",
            degree: "CAD-CAM Informatikus",
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
            <Tabs defaultValue="Szakmai tapasztalat" className="flex flex-col xl:flex-row gap-[60px]">
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="Szakmai tapasztalat">Szakmai tapasztalat</TabsTrigger>
                    <TabsTrigger value="Végzettségek, tanulmányok">Végzettségek, tanulmányok</TabsTrigger>
                    <TabsTrigger value="Kompetenciák">Kompetenciák</TabsTrigger>
                    <TabsTrigger value="Magamról">Magamról</TabsTrigger>
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
                            <div>
                                <h3 className="text-2xl font-bold justify-normal">Szia, üdvözöllek!</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                                    Márk vagyok, a Széchenyi István Egyetem Mérnökinformatika Bsc. szakos hallgatója! Középiskolás korom óta foglalkozkok a programozással, azóta tanulgatom, szerzek új ismereteket. Matematika korrepetációval egyetem óta foglalkozok komolyabb szinten, mivel ott szerettem meg. Sportolást, a kézilabdát 2010-ben kezdtem a SZESE utánpótlásában. Két nyelven tudok: angolul, valamint németül.
                                </p>
                            </div>
                        </div>
                    </TabsContent>

                </div>

            </Tabs>
        </div>
    </motion.div>
}




export default Resume