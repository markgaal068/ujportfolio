"use client"

import { FiDownload } from "react-icons/fi";

const CVPage = () => {

  // Letöltési funkció (általános megoldás)
  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName; // Beállítjuk a letöltendő fájl nevét
    link.click();
  };

  return (
    <section className="mt-[15%] flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full px-6">
        
        {/* Hungarian CV */}
        <div 
          className="bg-[#27272c] rounded border border-accent text-white p-8 rounded-lg flex flex-col items-center justify-center gap-4 hover:bg-accent transition-all duration-300 cursor-pointer"
          onClick={() => handleDownload("/Gaal_Mark_Oneletrajz.pdf", "Gaal_Mark_Oneletrajz.pdf")}
        >
          <h2 className="text-2xl font-bold">Magyar CV</h2>
          <FiDownload className="text-3xl" />
          <span className="uppercase text-lg font-semibold">Letöltés</span>
        </div>

        {/* English CV */}
        <div 
          className="bg-[#27272c] rounded border border-accent text-white p-8 rounded-lg flex flex-col items-center justify-center gap-4 hover:bg-accent transition-all duration-300 cursor-pointer"
          onClick={() => handleDownload("/Gaal_Mark_Resume.pdf", "Gaal_Mark_Resume.pdf")}
        >
          <h2 className="text-2xl font-bold">English CV</h2>
          <FiDownload className="text-3xl" />
          <span className="uppercase text-lg font-semibold">Download</span>
        </div>

        {/* German CV */}
        <div 
          className="bg-[#27272c] rounded border border-accent text-white p-8 rounded-lg flex flex-col items-center justify-center gap-4 hover:bg-accent transition-all duration-300 cursor-pointer"
          onClick={() => handleDownload("/Gaal_Mark_Lebenslauf.pdf", "Gaal_Mark_Lebenslauf.pdf")}
        >
          <h2 className="text-2xl font-bold">Deutscher CV</h2>
          <FiDownload className="text-3xl" />
          <span className="uppercase text-lg font-semibold">Herunterladen</span>
        </div>
      </div>
    </section>
  );
};

export default CVPage;
