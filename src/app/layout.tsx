import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gutnes Digital - Digitalización y Desarrollo Web en Sevilla",
  description: "Expertos en digitalización empresarial, desarrollo web, SEO y auditoría IT en Alcalá de Guadaíra, Sevilla. Transformamos tu negocio digitalmente.",
  keywords: ["digitalización", "desarrollo web", "SEO", "Sevilla", "Alcalá de Guadaíra", "auditoría IT", "transformación digital", "diseño web", "marketing digital"],
  authors: [{ name: "Gutnes Digital" }],
  creator: "Gutnes Digital",
  publisher: "Gutnes Digital",
  metadataBase: new URL('https://www.gutnes.es'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Gutnes Digital - Digitalización y Desarrollo Web en Sevilla",
    description: "Expertos en digitalización empresarial, desarrollo web, SEO y auditoría IT en Alcalá de Guadaíra, Sevilla. Transformamos tu negocio digitalmente.",
    url: "https://www.gutnes.es",
    siteName: "Gutnes Digital",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gutnes Digital - Digitalización y Desarrollo Web en Sevilla",
    description: "Expertos en digitalización empresarial, desarrollo web, SEO y auditoría IT en Alcalá de Guadaíra, Sevilla.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-de-verificacion-aqui', // Lo agregarás después desde Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
