import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tharun M R - Computer Science Student & Developer",
  description:
    "Portfolio of Tharun M R, a motivated Computer Science student and front-end developer proficient in Python, Java, JavaScript, React.js, and more.",
  keywords: "Tharun M R, Computer Science, Developer, Python, Java, JavaScript, React, Portfolio",
  authors: [{ name: "Tharun M R" }],
  openGraph: {
    title: "Tharun M R - Computer Science Student & Developer",
    description: "Portfolio showcasing projects, skills, and experience in web development and programming.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
