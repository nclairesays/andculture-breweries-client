import React from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
import '../styles/BreweryDetails.scss'

const BreweryDetails = (props) => {

  const { name,street, city, state, postal_code, longitude, latitude} = props.location.state

  const location = {
    zoom: 11, 
    center: {
      lat: parseFloat(latitude),
      lng: parseFloat(longitude)
    }
  }

  return (
    <div className='brewery-details-wrapper'>
      <h1>{name}</h1>
      <p>Location: {`${street} ${city}, ${state} ${postal_code}`} </p>
      <div style={{ height: '50vh', width: '100%', border: '1px solid black' }}>
        { location.center.lat && location.center.lat 
          ? 
            <GoogleMapReact
            zoom={location.zoom}
            center={location.center}
            defaultCenter={location.center}
            defaultZoom={location.zoom}
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
            yesIWantToUseGoogleMapApiInternals
            >
              <Marker  lat={location.center.lat} lng={location.center.lng} show="true" text="My Marker"/>
            </GoogleMapReact>
        : "no map, no longitude/latitude"
        }
      </div>
      <p>
        Disclaimer: If using the Rails API, the address, longitude, and latitude are randomly generated using the Faker gem. <br />
        To change api to OpenBreweryDB API, check the src/constants.js file.
      </p>
    </div>
  )
}

export default BreweryDetails