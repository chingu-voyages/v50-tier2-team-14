// src/pages/MapPage.jsx
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import redMarker from "../asset/red_marker.png"
import { Icon } from "leaflet"
import axios from 'axios'
import 'leaflet/dist/leaflet.css'

const MapPage = () => {
    const { state } = useParams()
    const [restaurants, setRestaurants] = useState([])

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

                const normalized = allRestaurantData.map(item => 
                    Array.isArray(item) ? item : [item])

                const allRestaurants = []
                normalized.forEach(category => {
                    category.forEach(restaurant => {
                      if (restaurant.country) {
                        const restaurantState = restaurant.country.split(', ').pop()
                        const id = restaurant.index
                        const name = restaurant.name
                        const latitude = restaurant.latitude
                        const longitude = restaurant.longitude
                        allRestaurants.push({ id, name, latitude, longitude, state: restaurantState })
                      }
                    })
                })
                const filteredRestaurants = allRestaurants.filter(r => r.state === state)
                setRestaurants(filteredRestaurants)
                
            } catch (error) {
                console.error("Error fetching the menu data", error)
            }
        }

        fetchMenuData()
    }, [state])
    
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
    console.log(restaurants)

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
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Restaurants in {state}</h1>
            <MapContainer bounds={bounds} zoom={7} className="h-96">
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
    )
}

export default MapPage
