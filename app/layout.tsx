import './globals.css'
import type { Metadata } from 'next'
import {Jura } from 'next/font/google'

const JuraFont = Jura({
  weight: "300",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'My Portfolio',
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