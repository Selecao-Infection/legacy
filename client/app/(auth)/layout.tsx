"use client "
import { Toaster, toast } from 'sonner'

// import Header from "../Nav/Fot/navbar"


export default function AuthLayout({
  children, authPage = false,
}: {
  children: React.ReactNode
  authPage?: boolean
}) {
  return (
<section> 
<Toaster richColors position="top-right" expand={false} />
        {children}

</section>

  
  )
}
