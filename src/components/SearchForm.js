import React from 'react'
import { useGlobalContext } from '../context'
export default function SearchForm() {
  const { users, setFilteredUsers, fetchData, setUsers } = useGlobalContext()
  const searchValue = React.useRef('')
  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  function searchAgent() {
    const filteredUsers = []
    users.map((user) => {
      if (
        user.name
          .toLowerCase()
          .includes(searchValue.current.value.toLowerCase())
      ) {
        filteredUsers.push(user)
      }
    })
    setFilteredUsers(filteredUsers)
    if (searchValue.current.value === '') {
      setFilteredUsers([])
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <section className='section-search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your agent</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchAgent}
          />
        </div>
      </form>
    </section>
  )
}
