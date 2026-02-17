// import type { Metadata, Viewport } from "next";
// import { Geist, Geist_Mono, Manrope } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/header";
// import Footer from "@/components/footer";

// const manrope = Manrope({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800"],
// });

// const _geist = Geist({ subsets: ["latin"] });
// const _geistMono = Geist_Mono({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "SalonHub",
//   description: "",
//   icons: {
//     icon: [
//       {
//         url: "/icon-light-32x32.png",
//         media: "(prefers-color-scheme: light)",
//       },
//       {
//         url: "/icon-dark-32x32.png",
//         media: "(prefers-color-scheme: dark)",
//       },
//       {
//         url: "/icon.svg",
//         type: "image/svg+xml",
//       },
//     ],
//     apple: "/apple-icon.png",
//   },
// };

// export const viewport: Viewport = {
//   width: "device-width",
//   initialScale: 1,
//   maximumScale: 5,
//   userScalable: true,
//   themeColor: "#5b4fff",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className="font-sans antialiased bg-background text-foreground">
//         <Header />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SalonHub",
  description: "",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#5b4fff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.className} antialiased bg-background text-foreground`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
