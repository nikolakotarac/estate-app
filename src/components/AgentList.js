import React from 'react'
import Agent from './Agent'
import Loading from './Loading'
import { useGlobalContext } from '../context'

export default function AgentList() {
  const { loading, filteredUsers } = useGlobalContext()
  if (loading) {
    return <Loading />
  }
  if (filteredUsers.length < 1) {
    return <h2 className='section-title'>please enter valid agent name</h2>
  }
  return (
    <section className='section-agents'>
      {filteredUsers.slice(0, 11).map((item) => {
        return <Agent key={item.id} {...item} />
      })}
    </section>
  )
}
