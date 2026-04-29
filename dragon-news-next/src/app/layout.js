import {  Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const poopins = Poppins({
  variable: "--font-poopins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const montserrat = Montserrat({
  variable: "--font-poopins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})



export const metadata = {
  title: "Dragon News",
  description: "Best news portal in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`h-full antialiased`}
    >
      <body className={`${poopins.className} not-[]:min-h-full flex flex-col`}>
        
        {children}
        </body>
    </html>
  );
}
