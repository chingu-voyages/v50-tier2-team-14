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

const RestaurantsByState = () => {
    const { state } = useParams()
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
                const allRestaurantData = Object.values(data)
        
                // Normalize all data is Array
                const normalized = allRestaurantData.map(item => 
                    Array.isArray(item) ? item : [item])

                // push data we needed to use in allRestaurants Array
                const allRestaurants = []
                normalized.forEach(category => {
                    category.forEach(restaurant => {
                      if (restaurant.country) {
                        const restaurantState = restaurant.country.split(', ').pop()
                        const id = Math.random()
                        const name = restaurant.name
                        const latitude = restaurant.latitude
                        const longitude = restaurant.longitude
                        allRestaurants.push({ id, name, latitude, longitude, state: restaurantState })
                      }
                    })
                })

                // get restaurants that located in a specific state
                const filteredRestaurants = allRestaurants.filter(r => r.state === state)
                setRestaurants(filteredRestaurants)
                
            } catch (error) {
                console.error("Error fetching the menu data", error)
            }
        }

        fetchMenuData()
    }, [state])

    const handleCategoryClick = (category) => {
        navigate(`/category-map/${state}/${category}`)
    }

    // Set boundary between all restaurants, center groups of markers
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

    
    


    return (
        <div className="container mx-auto p-4  mt-10 mb-20">
            <h1 className="text-2xl font-bold mb-11">Restaurants in {state}</h1>
            <div className="flex justify-evenly">
                <img src={burger} alt="burger" className='size-40 font-extrabold cursor-pointer' onClick={() => handleCategoryClick('burgers')} />
                <img src={pizza} alt="pizza" className='size-40 cursor-pointer' onClick={() => handleCategoryClick('pizza')} />
                <img src={fried_chicken} alt="fried chicken" className='size-40 cursor-pointer' onClick={() => handleCategoryClick('fried_chicken')} />
                <img src={steak} alt="steak" className='size-40 cursor-pointer' onClick={() => handleCategoryClick('steak')} />
                <img src={desserts} alt="desserts" className='size-40 cursor-pointer' onClick={() => handleCategoryClick('desserts')} />
            </div>
            <div className="flex justify-evenly mb-24">
                <p>BURGER</p>
                <p>PIZZA</p>
                <p>FRIED CHICKEN</p>
                <p>STEAK</p>
                <p>DESSERT</p>
            </div>
            <div className="m-8 mx-48">
            <MapContainer bounds={bounds} zoom={1} className="h-96">
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
        </div>
    )
}

export default RestaurantsByState
