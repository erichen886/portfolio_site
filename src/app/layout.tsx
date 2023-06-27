import "./globals.css";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

//More about fonts with tailwing: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#with-tailwind-css
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-mont`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
