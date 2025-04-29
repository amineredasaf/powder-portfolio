import './globals.css'
import type { Metadata } from 'next'
import {Jura } from 'next/font/google'

const JuraFont = Jura({
  weight: "300",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Amine Reda SAF - Portfolio',
  description: 'Amine Reda SAF - Portfolio Website',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amineredasaf.com',
    siteName: 'Amine Reda Saf',
    title: 'Amine Reda Saf',
    description: 'My Name is Reda Amine Saf, I am a Backend Developer',
    images: [
      {
        url: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2019/05/StewieFeature.jpg',
        width: 1200,
        height: 630,
        alt: 'Amine Reda Saf',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${JuraFont.className}`}>{children}</body>
    </html>
  )
}