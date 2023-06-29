import "./globals.css";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

//More about fonts with tailwing: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#with-tailwind-css
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-mont`}>
        <div className="flex flex-col min-h-screen ">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
