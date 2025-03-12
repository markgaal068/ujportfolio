"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// KOMPONENSEK
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <>
      <Head>
        <title>Gaál Márk - Szabadúszó Webfejlesztő és Magántanár</title>
        <meta name="description" content="Korrepetálás Győrben és környékén, valamint webfejlesztési oktatás online és személyesen, igényre szabottan." />
        <meta name="keywords" content="webfejlesztés, korrepetálás, programozás, matematika, webdizájn, olcsó, hatékony, oktatás, Győr, Next.js, React, frontend, backend" />
        <meta property="og:title" content="Gaál Márk - Szabadúszó Webfejlesztő és Magántanár" />
        <meta property="og:description" content="Korrepetálás Győrben és online webfejlesztési oktatás, rugalmasan és személyre szabottan." />
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
              "jobTitle": "Szabadúszó Webfejlesztő és Magántanár",
              "url": "https://www.gaalmark.hu",
              "sameAs": [
                "https://www.linkedin.com/in/gaalmark",
                "https://github.com/markgaal068"
              ],
              "description": "Korrepetálás Győrben és környékén, valamint online webfejlesztési oktatás."
            })
          }}
        />
      </Head>

      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* Szöveges rész */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <h2 className="text-xl font-semibold">Szabadúszó, Magántanár</h2>
              <h1 className="h1 mb-6">
                Gaál <span className="text-accent">Márk</span>
              </h1>
              <h2 className="text-lg font-medium text-white/80">Webfejlesztés és matematika oktatás</h2>
              <p className="max-w-[500px] mb-9 text-white/80 text-justify">
                Korrepetálás Győrben és vonzáskörzetében személyesen illetve online, valamint webfejlesztési oktatás bárhol, rugalmasan és igényre szabottan.
              </p>

              {/* Gomb és social ikonok */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Link href="/cv-letoltese">
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2"
                  >
                    <span>CV letöltése</span>
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
            <div>
              <Photo className="order-1 xl:order-none mb-8 xl:mb-0" alt="Gaál Márk portré" />
            </div>
          </div>
        </div>
        <Stats />
      </section>
    </>
  );
};

export default Home;
