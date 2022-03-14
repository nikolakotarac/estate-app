import React from 'react'
import { Link } from 'react-router-dom'
export default function Agent({ name, email, id, status, credits }) {
  return (
    <article className='single-agent'>
      <div className='agent-info'>
        <h3>name : {name}</h3>
        <h4>contact : {email}</h4>
        <p>status : {status}</p>
        <Link to={`/agent/${id}`} className='btn'>
          details
        </Link>
      </div>
    </article>
  )
}
