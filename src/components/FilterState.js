// src/components/FilterState.js
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

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
    <div className="ml-20 my-20">
      <h1 className="text-2xl font-bold mb-4">Food Delivery</h1>
      </div>
      <div className="flex justify-center align-middle mb-40">
      <select
        className="border p-2"
        value={selectedState}
        onChange={e => setSelectedState(e.target.value)}
      >
        <option value="" disabled>Select a State</option>
        {states.map(state => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
      <button
        className="bg-blue-500 text-white p-2 ml-2"
        onClick={handleSearch}
      >
        Search
      </button>
      </div>
    
    </>
  )
}

export default FilterState
