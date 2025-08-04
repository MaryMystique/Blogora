import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
 subsets: ["latin"],
 weight: ["100","200","300","400","500","600","700","800","900"],
})

export const metadata = {
  title: "Blogora | A blog that Write,Share and Connect",
  description: "Blogora is a fast,developer-friendly blog platform built for the modern web.Whether you're sharing code, tutorials, or opinions-your words lives here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
