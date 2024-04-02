"use client"
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'
 
export default function Page() {

  React.useEffect(()=> {
    redirect('/dashboard')
  },[])
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  )
}