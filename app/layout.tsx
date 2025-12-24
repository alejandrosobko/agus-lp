import { Analytics } from "@vercel/analytics/next"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import type React from "react"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://construcciontotal.com.ar"),
  title: {
    default:
      "Servicios Profesionales de Construcción | Residencial y Comercial",
    template: "%s | Construcción Profesional",
  },
  description:
    "Empresa de construcción con servicios residenciales, comerciales, remodelaciones, acabados de lujo y construcción general. Más de 20 años de experiencia.",
  keywords: [
    "construcción",
    "servicios de construcción",
    "construcción residencial",
    "construcción integral",
    "remodelaciones",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://construcciontotal.com.ar",
    siteName: "Construcción Profesional",
    title: "Servicios Profesionales de Construcción",
    description:
      "Empresa de construcción especializada en proyectos residenciales, comerciales y generales.",
    images: [
      {
        url: "/construccion-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Servicios de Construcción Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios Profesionales de Construcción",
    description:
      "Construcción de calidad para tus proyectos residenciales y comerciales",
    images: ["/construccion-logo.jpg"],
  },
  alternates: {
    canonical: "https://construcciontotal.com.ar",
    languages: {
      es: "https://construcciontotal.com.ar",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#f5f5f5ff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=yes"
        />
      </head>
      <body
        className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
