'use client'

import React, { useEffect } from 'react'
// logout
export default function Order() {
  const logOut =()=>{
    // for delete cookie
    document.cookie = 'shoehubUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/order ;';  
     window.location.href='/'
  }
  return (
    <>Hello world
    <button onClick={logOut}>Log Out</button>
     </>
  )
}
