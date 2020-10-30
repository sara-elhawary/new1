import React from 'react'
import Link from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>
        I am home. Go to <Link href="/about">About</Link>
      </h1>
    </div>
  )
}
