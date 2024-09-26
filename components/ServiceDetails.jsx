"use client"

const ServiceDetails = ({ serviceIndex }) => {
    switch (serviceIndex) {
        case 0:
            return (
                <div className="bg-primary border border-accent text-white p-4 mt-4 rounded-lg shadow-lg">
                    <h3 className="font-bold text-lg">WEB ÁRAK</h3>
                    <p className="mt-2">
                        Az árak a végösszeg felé haladnak, és ezek alkuképesek, de részletfizetés esetén további költségek merülhetnek fel.
                        Különböző csomagok és egyszerűsített díjszabások is elérhetők, melyek az adott megrendeléstől függnek.
                        A fő célom az, hogy minden ügyfelem a lehető legkedvezőbb ajánlatot kapja.
                    </p>

                    <h4 className="font-semibold mt-4">Weboldalak árai:</h4>
                    <ul className="list-disc ml-6 mt-1">
                        <li>Egyoldalas weboldal: 79.990 Ft-tól</li>
                        <li>Több oldalas weboldal: 159.990 Ft-tól</li>
                    </ul>

                    <h4 className="font-semibold mt-4">Webhosting, karbantartás és módosítási díjak:</h4>
                    <ul className="list-disc ml-6 mt-1">
                        <li>Havi alapdíj: 5.000 Ft</li>
                        <li>Módosítás díja: 2.500 Ft-tól</li>
                    </ul>

                    <h4 className="font-semibold mt-4">Logo- és arculattervezési díjak:</h4>
                    <ul className="list-disc ml-6 mt-1">
                        <li>Konzultációs díj (20 perc ONLINE): INGYENES</li>
                        <li>Alapdíj: 10.000 Ft</li>
                        <li>Utólagos módosítás: Megbeszélés alapján történik.</li>
                    </ul>

                    <p className="font-semibold text-red-500 mt-4">FONTOS!</p>
                    <p className="mt-1">
                        A végösszeg 10%-a előlegként fizetendő, mely visszamondás esetén <span className="font-bold">NEM visszatérítendő.</span>
                        Fizetési lehetőségek közé tartozik a készpénzfizetés és a banki átutalás is. Amennyiben csomagdíjainkról
                        kíván érdeklődni, kérjük, hívja a +36 30 419 9942-es telefonszámot.
                    </p>

                    <p className="mt-4">
                        Minden ügyfél számára személyre szabott ajánlatot állítunk össze a megrendelés méretétől függően!
                    </p>
                </div>
            );
        case 1:
            return (
                <div className="bg-primary border border-accent text-white p-4 mt-4 rounded-lg shadow-lg">
                    <h3 className="font-bold text-lg">Korrepetálási Díjak</h3>
                    <p className="mt-2">
                        Az alábbiakban részletezett árak 45 perces tanórákra vonatkoznak. Lehetőség van online és személyes jelenlétű oktatás igénybevételére is.
                        A személyes oktatás Győrben és környékén érhető el, amely esetén kiszállási díjat számítok fel. A díjak az alábbiak szerint alakulnak:
                    </p>

                    <h4 className="font-semibold mt-4">Alsó tagozat:</h4>
                    <ul className="list-disc ml-6 mt-1">
                        <li>2500 Ft / 45 perc</li>
                        <li>Házi feladatok ellenőrzése, hiányosságok javítása, tananyag elmagyarázása. Részletes egyeztetésre az e-mailben történő kapcsolatfelvétel után van lehetőség.</li>
                    </ul>

                    <h4 className="font-semibold mt-4">Felső tagozat:</h4>
                    <ul className="list-disc ml-6 mt-1">
                        <li>3000 Ft / 45 perc</li>
                        <li>Házi feladatok ellenőrzése, hiányosságok javítása, tananyag elmagyarázása. Részletes egyeztetésre az e-mailben történő kapcsolatfelvétel után van lehetőség.</li>
                    </ul>

                    <h4 className="font-semibold mt-4">Középiskola:</h4>
                    <ul className="list-disc ml-6 mt-1">
                        <li>3500 Ft / 45 perc</li>
                        <li>Házi feladatok ellenőrzése, hiányosságok javítása, tananyag elmagyarázása. Részletes egyeztetésre az e-mailben történő kapcsolatfelvétel után van lehetőség.</li>
                    </ul>

                    <h4 className="font-semibold mt-4">Felvételi és középszintű érettségi felkészítő:</h4>
                    <ul className="list-disc ml-6 mt-1">
                        <li>4500 Ft / 45 perc</li>
                        <li>Részletes egyeztetésre az e-mailben történő kapcsolatfelvétel után van lehetőség.</li>
                    </ul>

                    <h4 className="font-semibold mt-4">Kiszállási díj:</h4>
                    <p className="mt-2">
                        Személyes oktatásra szerdai és pénteki napokon van lehetőség, amely kiszállási díja 140 Ft/km. Az időpontok előzetes egyeztetést igényelnek.
                    </p>

                    <h4 className="font-semibold mt-4">Egyetemi hallgatók számára:</h4>
                    <p className="mt-2">
                        A Győri Széchenyi István Egyetem hallgatóinak lehetősége van Matematika1-2-3 tárgyakból korrepetálásra, 5000 Ft / 45 perc díjazásért.
                    </p>

                    <h4 className="font-semibold mt-4">Kedvezmények:</h4>
                    <ul className="list-disc ml-6 mt-1">
                        <li>Amennyiben a dolgozat nem éri el az elégséges (2) osztályzatot, a számonkérés előtti óradíj visszatérítendő.</li>
                        <li>Csoportos oktatás esetén 10% kedvezmény vehető igénybe diákonként. Például: 2 alsó tagozatos diák alapdíja 5000 Ft / 45 perc, kedvezménnyel 4500 Ft / 45 perc.</li>
                        <li>Egyéb kedvezmények (pl. SNI diákok, egyedülálló szülők gyermekeinek) e-mailben történő érdeklődés után elérhetők.</li>
                    </ul>

                    <p className="mt-4">
                        Fizetési lehetőségek: banki átutalás, illetve személyes alkalmak esetén készpénzes fizetés.
                        Ha az e-mailben küldött megkeresésre három munkanapon belül nem érkezik válasz, kérjük, keressen telefonon az alábbi számon: +36 30 419 9942.
                    </p>
                </div>

            );
        case 2:
            return (
                <div className="bg-primary border border-accent text-white p-4 mt-4 rounded-lg shadow-lg">
                    <h3 className="font-bold text-lg">CAD - CAM Szolgáltatások Árlistája</h3>
                    <p className="mt-2">
                        Az árak a megadott szolgáltatásokra vonatkoznak, és az elkészítési idő függvényében változhatnak.
                        Lehetőség van online és személyes jelenlétű oktatás igénybevételére is.
                        A személyes oktatás Győrben és környékén érhető el, amely esetén kiszállási díjat számítok fel. A díjak az alábbiak szerint alakulnak:
                    </p>

                    <h4 className="font-semibold mt-4">Gyártmányrajz Készítés:</h4>
                    <ul className="list-disc ml-6 mt-1">
                        <li>5000 Ft / óra</li>
                        <li>Részletes gyártmányrajzok készítése, amelyek megfelelnek a műszaki előírásoknak.</li>
                    </ul>

                    <h4 className="font-semibold mt-4">3D Modellezés:</h4>
                    <ul className="list-disc ml-6 mt-1">
                        <li>6000 Ft / óra</li>
                        <li>Bonyolult 3D modellek készítése, amelyek felhasználhatók prototípusokhoz vagy gyártási folyamatokhoz.</li>
                    </ul>

                    <h4 className="font-semibold mt-4">Műszaki Rajzok Ellenőrzése:</h4>
                    <ul className="list-disc ml-6 mt-1">
                        <li>3500 Ft / óra</li>
                        <li>Műszaki rajzok ellenőrzése és javítása, a hiányosságok kiigazítása.</li>
                    </ul>

                    <h4 className="font-semibold mt-4">CAD Oktatás:</h4>
                    <ul className="list-disc ml-6 mt-1">
                        <li>4000 Ft / 45 perc</li>
                        <li>Online és jelenléti órák, amelyek során a CAD szoftverek használatát tanítom.</li>
                    </ul>

                    <h4 className="font-semibold mt-4">Kiszállási Díj:</h4>
                    <p className="mt-2">
                        Kiszállásra Győrben és környékén van lehetőség, mely 140 Ft/km díjat von maga után! Egyeztetés köteles!
                    </p>

                    <h4 className="font-semibold mt-4">Kedvezmények:</h4>
                    <ul className="list-disc ml-6 mt-1">
                        <li>Amennyiben a dolgozat nem éri el az elégséges (2) osztályzatot, a számonkérés előtti óradíj visszatérítendő.</li>
                        <li>Csoportos oktatás esetén 10% kedvezmény vehető igénybe diákonként.</li>
                        <li>Egyéb kedvezmények (pl. SNI diákok, egyedülálló szülők gyermekeinek) e-mailben történő érdeklődés után elérhetők.</li>
                    </ul>

                    <p className="mt-4">
                        Fizetési lehetőségek: banki átutalás, illetve személyes alkalmak esetén készpénzes fizetés.
                        Ha az e-mailben küldött megkeresésre három munkanapon belül nem érkezik válasz, kérjük, keressen telefonon az alábbi számon: +36 30 419 9942.
                    </p>
                </div>

            );
        case 3:
            return (
                <div className="bg-primary border border-accent text-white p-4 mt-4 rounded-lg shadow-lg">
                    <h3 className="font-bold text-lg">HAMAROSAN...</h3>
                    <p>HAMAROSAN...</p>
                </div>
            );
        default:
            return null;
    }
};

export default ServiceDetails;
