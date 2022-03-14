import React from 'react'
import { Link } from 'react-router-dom'
export default function Error() {
  return (
    <section className='error'>
      <h3>Oops! It's a Dead End</h3>
      <Link to='/' className='btn'>
        back home
      </Link>
    </section>
  )
}
