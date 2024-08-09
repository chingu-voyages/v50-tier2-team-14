import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { stateFullName } from '../../utils/stateFullName.js'
import curve from '../../images/background/bg.png'
import rabit_logo from '../../images/logo/hungry_image.png'
import arrow from '../../images/button/right-arrow.png'

const FilterState = () => {
  const [restaurants, setRestaurants] = useState([])
  const [states, setStates] = useState([])
  const [selectedState, setSelectedState] = useState('')
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const response = await axios.get('https://menus-api.vercel.app/')
      const data = response.data
      const allRestaurantData = Object.values(data)

      // Make sure all data are Array, normalized all data in order to use forEach()
      const normalized = allRestaurantData.map(item => 
        Array.isArray(item) ? item : [item])

      // allRestaurants = an array with data: restaurant name, state abbreviation
      const allRestaurants = []
      normalized.forEach(category => {
        category.forEach(restaurant => {
            if (restaurant.country) {
                const state = restaurant.country.split(', ').pop()
                const name = restaurant.id
                allRestaurants.push({ name, state })
            }
        })
      })
      setRestaurants(allRestaurants)
      // make sure no repeated state and all data are state abbreviation 
      const uniqueStates = [...new Set(allRestaurants.map(r => r.state))].filter(state => state.length ===2 )
      setStates(uniqueStates)
      
      // Convert state abbreviation to full name, and sort them by alphabet
      const sortedStates = uniqueStates
      .map(state => ({
        abbreviation: state,
        fullName: stateFullName[state]
      }))
      .filter(state => state.fullName)
      .sort((a, b) => a.fullName.localeCompare(b.fullName)); 
      setStates(sortedStates)

    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

useEffect(() => {
    fetchData()
  }, []) 

const handleSearch = () => {
  navigate(`/restaurants/${selectedState}`)
  }

return (
  <>
  <div className='h-[700px] bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${curve})`}}>
    <div className='flex flex-row'>
      <div className='basis-1/2 h-[700px] ml-16'>
        <img src={rabit_logo} className='size-[700px] flex justify-center items-center' />
      </div>
      <div className='basic-1/2 flex flex-col gap-3 justify-center items-center'>
        <div><p className='text-primary text-5xl font-luckiestGuy'>HUNGRY RABBIT</p></div>
        <div>
          <p className='text-primary font-tensor text-center text-lg'>Offering a diverse menu that includes a</p>
          <p className='text-primary font-tensor text-center text-lg'>variety of cuisines such as pizza, burgers,</p> 
          <p className='text-primary font-tensor text-center text-lg'>BBQ, and delicious desserts.</p>
        </div>
        <div className='flex items-center space-x-6'>
          <select
             className='select select-bordered border-primary bg-neutral w-full max-w-xs'
             value={selectedState}
             onChange={e => setSelectedState(e.target.value)}
          >
          <option value='' disabled>Select a State</option>
          {states.map(state => (
          <option key={state.abbreviation} value={state.abbreviation}>{state.fullName}</option>
           ))}
          </select>
          <img 
           src={arrow}
           alt='Search'
           className='size-10 hover:cursor-pointer'
           onClick={handleSearch}
           />
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default FilterState
