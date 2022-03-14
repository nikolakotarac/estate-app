import React from 'react'
import Loading from './Loading'
import { useParams, Link } from 'react-router-dom'

export default function EstateInfo() {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [estates, setEstates] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getEstates() {
      try {
        const response = await fetch(
          `https://dev.volvox.rs/api/generic_source/src/estate?user_id=${id}`
        )
        const data = await response.json()
        const estates = data.estates
        if (estates) {
          setEstates(estates)
        } else {
          setEstates(null)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getEstates()
  }, [id])
  if (loading) {
    return <Loading />
  }
  if (!estates || estates.length === 0) {
    return (
      <div className='estate'>
        <div className='estate-info'>
          <h3>No Estates To Display</h3>
          <Link to='/' className='btn '>
            back home
          </Link>
        </div>
      </div>
    )
  } else {
    return (
      <section className='estate'>
        {estates.map((estate) => {
          return (
            <div className='estate-item' key={estate.id}>
              <div className='estate-info'>
                <h3>Estate Info:</h3>
                <p> price : {estate.price}</p>
                <p>address : {estate.address}</p>
                <Link to='/' className='btn'>
                  back home
                </Link>
              </div>
            </div>
          )
        })}
      </section>
    )
  }
}
