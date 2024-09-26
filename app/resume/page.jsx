"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa"

import {
    SiTailwindcss, SiNextdotjs
} from "react-icons/si"


//ALAPADATOK

const about = {
    title: 'Magamról',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore soluta nam omnis error voluptatum labore quod, suscipit nemo? Adipisci, commodi.",
    info: [
        {
            fieldName: "Név",
            fieldValue: "Gaál Márk"
        },
        {
            fieldName: "Telefon",
            fieldValue: "(+36) 30 419 9942"
        },
        {
            fieldName: "Tapasztalat",
            fieldValue: "3+ év"
        },
        {
            fieldName: "Discord",
            fieldValue: "markgaal068"
        },
        {
            fieldName: "Állampolgárság",
            fieldValue: "Magyar"
        },        
        {
            fieldName: "Email",
            fieldValue: "gaalmark.markit@gmail.com"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Elérhető"
        },
        {
            fieldName: "Nyelvismeret",
            fieldValue: "Angol, Német"
        },
    ]
}

//TAPASZTALATOK ISMERETEK

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'Szakmai tapasztalat',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore soluta nam omnis error voluptatum labore quod, suscipit nemo? Adipisci, commodi.",
    items: [
        {
            company: "cégnév",
            position: "pozíció",
            duration: "duráció"
        },
        {
            company: "cégnév",
            position: "pozíció",
            duration: "duráció"
        },
        {
            company: "cégnév",
            position: "pozíció",
            duration: "duráció"
        },
        {
            company: "cégnév",
            position: "pozíció",
            duration: "duráció"
        },
        {
            company: "cégnév",
            position: "pozíció",
            duration: "duráció"
        },
    ]
}

// TANULMÁNYOK

const education = {
    icon: '/assets/resume/cap.svg',
    title: 'Végzettségek, tanulmányok',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore soluta nam omnis error voluptatum labore quod, suscipit nemo? Adipisci, commodi.",
    items: [
        {
            institution: "iskolanév",
            degree: "tanulmány megnevezáse",
            duration: "duráció"
        },
        {
            institution: "iskolanév",
            degree: "tanulmány megnevezáse",
            duration: "duráció"
        },
        {
            institution: "iskolanév",
            degree: "tanulmány megnevezáse",
            duration: "duráció"
        },
        {
            institution: "iskolanév",
            degree: "tanulmány megnevezáse",
            duration: "duráció"
        },
    ]
}

//KOMPETENCIÁK

const skills = {
    title: "Készségek",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore soluta nam omnis error voluptatum labore quod, suscipit nemo? Adipisci, commodi.",
    skilllist: [
        {
            icon: <FaHtml5 />,
            name: "html 5 - 5⭐",
        },
        {
            icon: <FaCss3 />,
            name: "css 3 - 5⭐",
        },
        {
            icon: <FaJs />,
            name: "javascript - 4⭐",
        },
        {
            icon: <FaReact />,
            name: "react.js - 4⭐",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js - 4⭐",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css - 4⭐",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js - ⏳",
        },
        {
            icon: <FaFigma />,
            name: "figma - 3⭐",
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
                                <p className="nax-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                            </div>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                {skills.skilllist.map((skill, index)=>{
                                    return <li key={index}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="capitalize">{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </TabsContent>



                    {/* MAGAMRÓL */}
                    <TabsContent value="Magamról" className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                {about.info.map((item, index)=>{
                                    return <li className="flex items-center justify-center xl:justify-start gap-4" key={index}>
                                        <span className="text-white/60">{item.fieldName}</span>
                                        <span className="text-xl">{item.fieldValue}</span>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </TabsContent>
                </div>

            </Tabs>
        </div>
    </motion.div>
}




export default Resume