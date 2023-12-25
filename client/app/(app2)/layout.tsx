"use client "
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './Nav/Fot/navbar'
import Footer from './Nav/Fot/footer'
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
<Header/>
        {children}
        <Footer/>
        
    </html>
  )
}
