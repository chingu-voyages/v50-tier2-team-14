// src/pages/CategoryMapPage.jsx
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import redMarker from "../../images/marker/red_marker.png"
import burger from "../../images/category/burger.png"
import pizza from "../../images/category/pizza.png"
import fried_chicken from "../../images/category/fried_chicken.png"
import steak from "../../images/category/steak.png"
import desserts from "../../images/category/desserts.png"
import { Icon } from "leaflet"
import axios from 'axios'
import 'leaflet/dist/leaflet.css'
import { stateFullName } from '../../utils/stateFullName'

const FilterByCategory = () => {
    const { state, category } = useParams()
    const [restaurants, setRestaurants] = useState([])
    const navigate = useNavigate()

    const customIcon = new Icon({
        iconUrl: redMarker,
        iconSize: [40, 40]
    })

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await axios.get('https://menus-api.vercel.app/')
                const data = response.data
                // make sure the restaurants belong to the categories we picked
                if (data[category] && Array.isArray(data[category])) {
                    const filteredRestaurants = data[category].filter(restaurant => 
                    restaurant.country.split(', ').pop() === state
                )
                setRestaurants(filteredRestaurants)
                if (filteredRestaurants.length === 0) {
                    alert("No result found for this category")
                }
            } else {
                    console.log("No result found for this category")
                    setRestaurants([])
                }
            } catch (error) {
                console.error("Error fetching the menu data", error)
            }
        }
        fetchMenuData()
    }, [state, category])

    const handleCategoryClick = (newCategory) => {
        navigate(`/category-map/${state}/${newCategory}`)
    }

    const calculateBounds = (restaurants) => {
        if (restaurants.length === 0) return [[0, 0], [0, 0]]
        const latitudes = restaurants.map(r => r.latitude)
        const longitudes = restaurants.map(r => r.longitude)
        const minLat = Math.min(...latitudes)
        const maxLat = Math.max(...latitudes)
        const minLng = Math.min(...longitudes)
        const maxLng = Math.max(...longitudes)
        return [[minLat, minLng], [maxLat, maxLng]]
    }

    const bounds = calculateBounds(restaurants)

    const FitBoundsComponent = () => {
        const map = useMap()
        useEffect(() => {
            if (restaurants.length > 0) {
                map.fitBounds(bounds)
            }
        }, [map, bounds, restaurants.length])
        return null
    }
    // convert state abbreviation to full name
    const stateName = stateFullName[state]

    return (
        <div className="container mx-auto p-4 mt-10 mb-20">
            <h1 className="text-2xl font-bold mb-11">Restaurants in {stateName} - {category}</h1>
            <div className="flex justify-evenly mb-4">
                <img src={burger} alt="burger" className='size-32 cursor-pointer' onClick={() => handleCategoryClick('burgers')} />
                <img src={pizza} alt="pizza" className='size-32 cursor-pointer' onClick={() => handleCategoryClick('pizza')} />
                <img src={fried_chicken} alt="fried chicken" className='size-32 cursor-pointer' onClick={() => handleCategoryClick('fried_chicken')} />
                <img src={steak} alt="steak" className='size-32 cursor-pointer' onClick={() => handleCategoryClick('steak')} />
                <img src={desserts} alt="desserts" className='size-32 cursor-pointer' onClick={() => handleCategoryClick('desserts')} />
            </div>
            <div className="flex justify-evenly mb-24">
                <p className='font-extrabold'>BURGER</p>
                <p className='font-extrabold'>PIZZA</p>
                <p className='font-extrabold'>FRIED CHICKEN</p>
                <p className='font-extrabold'>STEAK</p>
                <p className='font-extrabold'>DESSERT</p>
            </div>
                {restaurants.length === 0 ? (
                    <div className='bg-neutral rounded-lg border border-accent flex justify-center items-center h-64'>
                    <p className='text-lg text-primary'>No results found for this category.</p>
                    </div>
                ): (
                <div className="m-8 mx-48">
                <MapContainer bounds={bounds} zoom={8} className="h-96 rounded-xl shadow-lg">
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                  {restaurants.map(restaurant => (
                    <Marker key={restaurant.id} position={[restaurant.latitude, restaurant.longitude]} icon={customIcon}>
                        <Popup>{restaurant.name}</Popup>
                    </Marker>
                ))}
                  <FitBoundsComponent />
                </MapContainer>
                </div>
        )}
        </div>
    )
}

export default FilterByCategory
