"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"

//KOMPONENSEK
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/oneletrajz.pdf'; // Update with the correct path to your PDF
    link.download = 'oneletrajz.pdf';
    link.click();
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Freelancer</span>
            <h1 className="h1 mb-6">Gaál <span className="text-accent">Márk</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80 text-justified">
              A tudás átadása nem csupán információk megosztása, hanem a jövő formálása is – minden kód, amit tanítok, egy új lehetőség a világ jobbá tételére.
            </p>

            {/* gomb és social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="uppercase flex items-center gap-2"
                onClick={handleDownload} 
              >
                <span>CV letöltése</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* photo */}
          <div>
            <Photo className="order-1 xl:order-none mb-8 xl:mb-0" />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;