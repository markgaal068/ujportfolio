import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";


//Komponens importok
import Header from "@/components/Header"
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import AnimatedBackground from "@/components/AnimatedBackground";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], wight: ["100", "200", "300", "400", "500", "600", "700", "800"], variable: '--font-jetbrainsMono' })

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Gaál Márk",
  description: "Freelancer, Matematika tanár.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body className={jetbrainsMono.variable}>
        <Header />
        <PageTransition>
          {children}
        </PageTransition>
        <StairTransition />

      </body>
      {/* <AnimatedBackground /> */}
    </html>
  );
}
