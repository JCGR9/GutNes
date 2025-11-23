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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.ico', sizes: '16x16' },
      { url: '/favicon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: "Gutnes Digital - Digitalización y Desarrollo Web en Sevilla",
    description: "Expertos en digitalización empresarial, desarrollo web, SEO y auditoría IT en Alcalá de Guadaíra, Sevilla. Transformamos tu negocio digitalmente.",
    url: "https://www.gutnes.es",
    siteName: "Gutnes Digital",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: '/favicon.png',
        width: 1200,
        height: 630,
        alt: 'Gutnes Digital Logo',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gutnes Digital - Digitalización y Desarrollo Web en Sevilla",
    description: "Expertos en digitalización empresarial, desarrollo web, SEO y auditoría IT en Alcalá de Guadaíra, Sevilla.",
    images: ['/favicon.png'],
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
    google: 'google86b4f550ad9bd86d',
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
