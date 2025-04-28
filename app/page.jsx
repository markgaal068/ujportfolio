"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Komponensek
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <>
      <Head>
        <title>Matematika Magántanár Győr - Gaál Márk</title>
        <meta
          name="description"
          content="Matematika korrepetálás Győrben és online. Tapasztalt magántanár egyéni vagy csoportos oktatásra. Webfejlesztési szolgáltatások."
        />
        <meta property="og:title" content="Matematika Magántanár Győr - Gaál Márk" />
        <meta property="og:description" content="Matematika oktatás személyesen Győrben vagy online, valamint professzionális webfejlesztési szolgáltatások." />
        <meta property="og:image" content="/your-image-url.jpg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Gaál Márk",
              "jobTitle": "Matematika Magántanár & Webfejlesztő",
              "url": "https://www.gaalmark.hu",
              "sameAs": [
                "https://www.linkedin.com/in/gaalmark",
                "https://github.com/markgaal068"
              ],
              "description": "Matematika magántanár Győrben, személyre szabott oktatás és professzionális webfejlesztés."
            })
          }}
        />
      </Head>

      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* Szöveges rész */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <h1 className="h1 mb-4">
                Gaál <span className="text-accent">Márk</span>
              </h1>
              <h2 className="text-xl font-semibold mb-4">Matematika magántanár & webfejlesztő</h2>
              <p className="max-w-[500px] mb-6 text-white/80 text-justify">
                Egyéni matematikakorrepetálás Győrben és online, kezdőknek és haladóknak. Professzionális webfejlesztés.
              </p>

              {/* Gombok és social ikonok */}
              <div className="flex flex-col xl:flex-row items-center gap-6">
                <Link href="/CVPage">
                  <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                    <span>CV Letöltése</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </Link>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Kép */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo alt="Gaál Márk - Matematika magántanár" />
            </div>
          </div>
        </div>
        <Stats />
      </section>
    </>
  );
};

export default Home;