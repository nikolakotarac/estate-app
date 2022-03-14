import React from 'react'
import SearchForm from './SearchForm'
import AgentList from './AgentList'
export const Home = () => {
  return (
    <div className='container'>
      <SearchForm />
      <AgentList />
    </div>
  )
}
