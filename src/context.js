import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://dev.volvox.rs/api/generic_source/src/user_search'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}`, {
        method: 'GET',
        headers: new Headers({
          Authorization: '123123',
        }),
      })

      const data = await response.json()
      const agents = data.results
      if (agents) {
        const newAgents = agents.map((item) => {
          const { id, name, email, status, credits } = item

          return { id, name, email, status, credits }
        })

        setUsers(newAgents)
      } else {
        setUsers([])
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }, [])
  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <AppContext.Provider
      value={{
        loading,
        users,
        setUsers,
        filteredUsers,
        setFilteredUsers,
        fetchData,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
