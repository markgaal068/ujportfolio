"use client"

const ServiceDetails = ({ serviceIndex }) => {
    switch (serviceIndex) {
        case 0:
            return (
                <div className="bg-primary border border-accent text-white p-6 mt-6 rounded-lg shadow-2xl">
                    <h3 className="font-bold text-2xl">WEBFEJLESZTÉSI ÁRLISTA 2025</h3>

                    <p className="mt-4">
                        2026 januárjában végzek a Széchenyi István Egyetem Mérnökinformatika BSc szakán.
                        Friss, naprakész tudással, fiatalos szemlélettel, mégis komoly szakmai hozzáállással vállalok webfejlesztési és IT projektekben munkát.
                    </p>

                    <p className="mt-4">
                        Minden feladat egyedi, ezért óradíjas elszámolással dolgozom. Elsődleges célom a megbízható, átlátható és magas színvonalú szolgáltatás nyújtása.
                    </p>

                    <h4 className="font-semibold text-xl mt-6">Általános óradíj:</h4>
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>Webfejlesztés (frontend, backend, WordPress):</strong> 18.000 Ft/óra</li>
                        <li><strong>Weboldal karbantartás, frissítés, módosítások:</strong> 15.000 Ft/óra</li>
                        <li><strong>SEO optimalizálás (technikai és tartalmi):</strong> 17.000 Ft/óra</li>
                        <li><strong>Konzultáció, projekttervezés (online/telefonon):</strong> 8.000 Ft/30 perc</li>
                    </ul>

                    <h4 className="font-semibold text-xl mt-6">Egyéb szolgáltatások óradíj alapon:</h4>
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>Weboldal sebességoptimalizálás:</strong> 17.000 Ft/óra</li>
                        <li><strong>Egyedi funkciók, API-k fejlesztése:</strong> 20.000 Ft/óra</li>
                        <li><strong>Reszponzív design javítása vagy kialakítása:</strong> 16.000 Ft/óra</li>
                        <li><strong>Tanácsadás tárhely/domain/technikai kérdésekben:</strong> 8.000 Ft/30 perc</li>
                    </ul>


                    <p className="mt-6">
                        A projektidő becslését minden megrendelés előtt részletes egyeztetés alapján adom meg.
                        Kisebb feladatok esetén a minimális elszámolási egység 30 perc.
                    </p>

                    <p className="font-semibold text-red-400 mt-6">Fontos tudnivalók:</p>
                    <p className="mt-2">
                        A megrendelés végösszegének 30%-át előlegként kérem. A fizetés banki átutalással történik.
                        Előzetes megállapodással részletfizetésre is van lehetőség.
                    </p>

                    <p className="mt-6">
                        További információért vagy személyre szabott ajánlatért keress bizalommal az alábbi elérhetőségen: <strong>+36 30 419 9942</strong>.
                    </p>
                </div>

            );

        case 1:
            return (
                <div className="bg-primary border border-accent text-white p-6 mt-6 rounded-lg shadow-2xl">
                    <h3 className="font-bold text-2xl">Korrepetálási Díjak – 2025</h3>
                    <p className="mt-4">
                        Az alábbi díjak 45 perces tanórákra vonatkoznak. Lehetőség van online és személyes oktatásra is. Személyes oktatás Győrben és környékén érhető el, külön kiszállási díjjal.
                    </p>

                    <h4 className="font-semibold text-xl mt-6">Alsó tagozat (1–4. osztály):</h4>
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>Online:</strong> 4.000 Ft / 45 perc</li>
                        <li><strong>Személyes:</strong> 4.500 Ft / 45 perc</li>
                        <li>Házi feladatok ellenőrzése, tananyag pótlása, személyre szabott gyakorlás.</li>
                    </ul>

                    <h4 className="font-semibold text-xl mt-6">Felső tagozat (5–8. osztály):</h4>
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>Online:</strong> 4.500 Ft / 45 perc</li>
                        <li><strong>Személyes:</strong> 5.000 Ft / 45 perc</li>
                        <li>Komplex feladatok magyarázata, felzárkóztatás, tantárgyi támogatás.</li>
                    </ul>

                    <h4 className="font-semibold text-xl mt-6">Középiskola (9–12. évfolyam):</h4>
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>Online:</strong> 5.500 Ft / 45 perc</li>
                        <li><strong>Személyes:</strong> 6.000 Ft / 45 perc</li>
                        <li>Feladatmegoldások, gyakorlati példák, érettségire való felkészítés.</li>
                    </ul>

                    <h4 className="font-semibold text-xl mt-6">Felvételi és érettségi felkészítő (Középszint):</h4>
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>Online:</strong> 6.500 Ft / 45 perc</li>
                        <li><strong>Személyes:</strong> 7.000 Ft / 45 perc</li>
                        <li>Részletes felkészítő program, korábbi feladatsorok áttekintése, egyéni konzultációk.</li>
                    </ul>

                    <h4 className="font-semibold text-xl mt-6">Egyetemi hallgatók részére:</h4>
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>Online:</strong> 8.000 Ft / 45 perc</li>
                        <li><strong>Személyes:</strong> 8.500 Ft / 45 perc</li>
                        <li>Matematika 1-2-3 tárgyakból korrepetálás, ZH-kra és vizsgákra való felkészítés.</li>
                    </ul>

                    <h4 className="font-semibold text-xl mt-6">Kiszállási díj:</h4>
                    <p className="mt-2">
                        Személyes oktatás esetén kiszállási díj: 250 Ft/km. Időpontok előzetes egyeztetéssel kérhetők.
                    </p>

                    <h4 className="font-semibold text-xl mt-6">Kedvezmények:</h4>
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>Csoportos oktatás:</strong> 10% kedvezmény diákonként.</li>
                        <li><strong>Havi bérlet (4 alkalom):</strong> 5% kedvezmény.</li>
                        <li><strong>10 alkalmas bérlet:</strong> 10% kedvezmény.</li>
                        <li><strong>SNI diákok, egyedülálló szülők gyermekei:</strong> egyedi kedvezmény e-mailes egyeztetéssel.</li>
                    </ul>

                    <p className="mt-6">
                        <strong>Fizetés:</strong> banki átutalással vagy személyes alkalmak esetén készpénzben lehetséges.
                    </p>

                    <p className="mt-4">
                        Ha az e-mailes megkeresésre három munkanapon belül nem kap választ, kérem, hívjon telefonon a <strong>+36304199942</strong> számon.
                    </p>
                </div>
            );

        case 2:
            return (
                <div className="bg-primary border border-accent text-white p-6 mt-6 rounded-lg shadow-2xl">
                    <h3 className="font-bold text-2xl">CAD-CAM Szolgáltatások Árlistája – 2025</h3>
                    <p className="mt-4">
                        Az alábbi árak irányadóak, az elkészítési idő és a feladat bonyolultsága alapján változhatnak.
                        Lehetőség van online és személyes szolgáltatások igénybevételére.
                        Személyes jelenlét Győrben és környékén elérhető, kiszállási díj mellett.
                    </p>

                    <h4 className="font-semibold text-xl mt-6">Gyártmányrajz Készítés (AutoCAD, Inventor):</h4>
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>Alapár:</strong> 7.000 Ft / óra</li>
                        <li>Részletes gyártmányrajzok készítése szabványok szerint, műszaki dokumentációval.</li>
                        <li>Egyszerűbb alkatrészek esetén fix áras ajánlat kérhető.</li>
                    </ul>

                    <h4 className="font-semibold text-xl mt-6">3D Modellezés (Inventor):</h4>
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>Alapár:</strong> 8.000 Ft / óra</li>
                        <li>3D alkatrészmodellek és összeállítások készítése, igény szerint gyártási dokumentációval.</li>
                    </ul>

                    <h4 className="font-semibold text-xl mt-6">CNC Programozás (Edgecam):</h4>
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>Alapár:</strong> 8.500 Ft / óra</li>
                        <li>Alap szintű NC programok készítése esztergáláshoz és maráshoz, gépi megmunkáláshoz előkészítés.</li>
                        <li>Bonyolultabb programokhoz részletes egyeztetés szükséges.</li>
                    </ul>

                    <h4 className="font-semibold text-xl mt-6">Műszaki Rajzok Ellenőrzése és Javítása:</h4>
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>Alapár:</strong> 5.500 Ft / óra</li>
                        <li>Műszaki rajzok átnézése, szabványosság ellenőrzése, javítások javaslata.</li>
                    </ul>

                    <h4 className="font-semibold text-xl mt-6">CAD Alapok Oktatása (AutoCAD, Inventor):</h4>
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>Ár:</strong> 5.500 Ft / 45 perc</li>
                        <li>Online vagy személyes oktatás, a szoftverek alapvető használatának elsajátítására.</li>
                        <li>Kezdő szinttől középhaladó szintig.</li>
                    </ul>

                    <h4 className="font-semibold text-xl mt-6">Kiszállási Díj:</h4>
                    <p className="mt-2">
                        Személyes konzultáció vagy oktatás esetén kiszállási díj: 250 Ft/km.
                        Időpontok egyeztetése szükséges.
                    </p>

                    <h4 className="font-semibold text-xl mt-6">Kedvezmények és Csomagajánlatok:</h4>
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>4 órás projektcsomag:</strong> 5% kedvezmény az alapárból.</li>
                        <li><strong>10 órás projektcsomag:</strong> 10% kedvezmény az alapárból.</li>
                        <li><strong>Csoportos oktatás (2-3 fő):</strong> 10% kedvezmény/fő.</li>
                        <li><strong>SNI diákok, egyedülálló szülők gyermekei:</strong> egyedi kedvezmény kérhető e-mailben.</li>
                    </ul>

                    <p className="mt-6">
                        <strong>Fizetés:</strong> banki átutalás vagy személyes találkozón készpénzes fizetés.
                        Előleg szükséges nagyobb projektek esetén (megbeszélés alapján).
                    </p>

                    <p className="mt-4">
                        Ha három munkanapon belül nem kap visszajelzést az e-mailes megkeresésére, kérjük, hívjon a <strong>+36304199942</strong> telefonszámon.
                    </p>
                </div>
            );

        case 3:
            return (
                <div className="bg-primary border border-accent text-white p-6 mt-6 rounded-lg shadow-2xl">
                    <h3 className="font-bold text-2xl">Személyi Edzés – 2025-től</h3>
                    <p className="mt-4">
                        Személyi edzéseim 2025 májusától elérhetők, Győrben és környékén.
                        Szolgáltatásaimat elsősorban azoknak ajánlom, akik célzott erőnléti, állóképességi és teljesítményfokozó edzést keresnek.
                    </p>

                    <h4 className="font-semibold text-xl mt-6">Szakmai háttér:</h4>
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>Végzettség:</strong> Testnevelési Egyetem – kézilabda edző (D licence, 2025 május)</li>
                        <li><strong>Tapasztalat:</strong> 3 év edzői gyakorlat, főként kondicionális képzésben, kézilabda közegben</li>
                        <li><strong>Specialitás:</strong> teljesítményfokozás, erőnléti fejlesztés, prevenciós edzések</li>
                    </ul>

                    <h4 className="font-semibold text-xl mt-6">Elérhető szolgáltatások:</h4>
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>Egyéni személyi edzések</strong> – kezdőknek, újrakezdőknek és haladóknak</li>
                        <li><strong>Sportág-specifikus felkészítés</strong> – kézilabda, labdajátékok</li>
                        <li><strong>Funkcionális edzések</strong> – core, stabilitás, mobilitás fejlesztés</li>
                        <li><strong>Prevenciós programok</strong> – sérülésmegelőzésre fókuszálva</li>
                        <li><strong>Edzéstervek készítése</strong> – személyre szabott 4–6–8 hetes programok, vagy általános erőnléti terv igény szerint</li>
                    </ul>

                    <h4 className="font-semibold text-xl mt-6">Árak:</h4>
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>Egyéni edzés:</strong> 7.500 Ft / 60 perc (időpont-egyeztetés szükséges)</li>
                        <li><strong>2 fős edzés (páros tréning):</strong> 6.000 Ft / fő / 60 perc (időpont-egyeztetés szükséges)</li>
                        <li><strong>3-4 fős csoportos edzés:</strong> 5.000 Ft / fő / 60 perc (időpont-egyeztetés szükséges)</li>
                        <li><strong>4 hetes egyéni edzésterv készítése:</strong> 18.000 Ft (edzési célok alapján)</li>
                        <li><strong>8 hetes egyéni edzésterv készítése:</strong> 32.000 Ft</li>
                        <li><strong>Általános edzésterv (erőnléti, állóképességi fejlesztésre):</strong> 12.000 Ft</li>
                    </ul>

                    <h4 className="font-semibold text-xl mt-6">Edzés helyszínek:</h4>
                    <p className="mt-2">
                        Győr belvárosi edzőtermekben, szabadtéren vagy egyéni helyszíni egyeztetéssel.
                        Személyes kiszállás lehetősége külön díjazás mellett (250 Ft/km).
                    </p>

                    <h4 className="font-semibold text-xl mt-6">Kedvezmények:</h4>
                    <ul className="list-disc ml-6 mt-2">
                        <li><strong>10 alkalmas bérlet egyéni edzésekhez:</strong> 5% kedvezmény</li>
                        <li><strong>Sportolói háttérrel (igazolt versenyzők):</strong> egyedi árképzés megbeszélés szerint</li>
                    </ul>

                    <p className="mt-6">
                        <strong>Fizetés:</strong> banki átutalás, vagy helyszínen készpénzes fizetés.
                        Időpont-egyeztetés szükséges minden edzés vagy edzésterv megrendelése előtt!
                    </p>

                    <p className="mt-4">
                        Jelentkezés vagy érdeklődés: e-mailben vagy telefonon a <strong>+36304199942</strong> számon.
                        Válaszidő: maximum 2 munkanap.
                    </p>
                </div>

            );


        default:
            return null;
    }
};

export default ServiceDetails;
