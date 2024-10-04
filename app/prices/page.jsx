"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { useState } from "react";
import { motion } from "framer-motion";
import ServiceDetails from "@/components/ServiceDetails"; // Importáljuk a dinamikus leírási komponenst

const services = [
    {
        num: "01",
        title: "Webfejlesztés",
        description: "Webfejlesztés áraival kapcsolatos részletek.",
    },
    {
        num: "02",
        title: "Korrepetálás",
        description: "Korrepetálás áraival kapcsolatos részletek.",
    },
    {
        num: "03",
        title: "Modellezés (CAD)",
        description: "3D modellezés áraival kapcsolatos részletek.",
    },
    {
        num: "04",
        title: "HAMAROSAN...",
        description: "HAMAROSAN...",
    },
];

const Services = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => (
                        <button
                            onClick={() => toggleDropdown(index)}
                            className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                        >
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                        {service.num}
                                    </div>

                                    <BsArrowDownRight className="text-primary text-3xl" />
                                </div>
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                    {service.title}
                                </h2>
                                {/* <p className="text-white/60">{service.description}</p> */}
                                <div className="border-b border-white/20 w-full"></div>
                                {/* A legördülő ablak tartálya */}
                                < motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: openIndex === index ? 1 : 0, height: openIndex === index ? "auto" : 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="overflow-hidden"
                                >
                                    {/* Állandó térfogat */}
                                    <div style={{ padding: openIndex === index ? "10px" : "0", transition: "padding 0.4s ease" }}>
                                        <ServiceDetails serviceIndex={index} />
                                    </div>
                                </motion.div>
                            </div>
                        </button>
                    ))}
                </motion.div>
            </div >
        </section >
    );
};

export default Services;
