"use client "


import Header from "../Nav/Fot/navbar"


export default function AuthLayout({
  children, authPage = false,
}: {
  children: React.ReactNode
  authPage?: boolean
}) {
  return (
<section> 
        {children}
</section>

  
  )
}
