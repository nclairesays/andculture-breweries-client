import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'


const Map = ({lng, lat}) => {

    const [center, setCenter] = useState({})
    const [zoom, setZoom] = useState(11)
    useEffect(() => {
        setCenter({
            lng: lng,
            lat: lat
        })
    }, [])

    const showMap = () => {
     return (lng && lat)
     ? <GoogleMapReact
            defaultCenter={{lat: 59.95,
                lng: 30.33}}
            defaultZoom={11}
        > data here
        </GoogleMapReact>
    : null
    }
  return (
    <div style={{ height: '100vh', width: '100%' }}>
        {/* { showMap() } */}
        
        
    </div>
  )
}

export default Map