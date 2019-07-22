import React, { useState, useEffect, Component } from 'react'
import GoogleMapReact from 'google-map-react';
// import Map from './Map'

const BreweryDetails = (props) => {
  // const params_id = match.params.id
  // // const { id, name, brewery_type, street, city, state, postal_code, website_url } = brewery
  // {match, location},
  // const [brewery, setBrewery] = useState({})
  // useEffect(()=> {
  //   fetchUrl()
  // },[])

  // async function fetchUrl() {
  //   // const response = await fetch(`https://api.openbrewerydb.org/breweries/${params_id}`);
  //   // const json = await response.json();
  //   fetch(`https://api.openbrewerydb.org/breweries/${params_id}`)
  //   .then(res => res.json())
  //   .then(res => setBrewery(res))

  //   // setBrewery(json);
  // }

  // // console.log(name, brewery_type, brewery)
  // // if user naviated to the details page using react router, then use passed down props for data
  if (props.location.state) {
  // // otherwise, if user manually typed in params based on brewery id, fetch the data from api
  } 
  // else {
    
  // }

 
  const { id, name,street, city, state, postal_code, longitude, latitude} = props.location.state

  // const location = {
  //   zoom: 11, 
  //   center: {
  //     lat: 46.73, 
  //     lng: -73.93
  //   }
  // }


  const location = {
    zoom: 11, 
    center: {
      lat: parseFloat(latitude),
      lng: parseFloat(longitude)
    }
  }

  console.log(location)

  const GoogleMap = props => (
    <GoogleMapReact
      zoom={props.zoom}
      center={props.center}
      defaultCenter={props.center}
      defaultZoom={props.zoom}
      bootstrapURLKeys={{
        key: 'AIzaSyCNuCP7BeVTvAhAayXJPQX8Qn9fPWBzTAc',
        language: 'en',
      }}
    >
      {props.children}
    </GoogleMapReact>
  );

  return (
    <div className='brewery-details-wrapper'>
      <h1>{name}</h1>
      <p>Location: {`${street} ${city}, ${state} ${postal_code}`} </p>
      <div style={{ height: '50vh', width: '100%', border: '1px solid black' }}>
        {GoogleMap(location)}
      </div>
    </div>
  )
}


export default BreweryDetails



// import React, { Component } from 'react';

// export default class BreweryDetails extends Component {
//   state = {
//     lat: 1.3521,
//     lng: 103.8198,
//     zoom: 11,
//     addLat: 1.3521,
//     addLng: 103.8198,
//     data:[  
//       {  
//        "latitude":"1.3589783333",
//        "is_on_trip":false,
//        "id":5,
//        "longitude":"103.752293000"
//       },
//       {  
//        "latitude":"1.3492333333",
//        "is_on_trip":true,
//        "id":6,
//        "longitude":"103.729582"
//       },
//       {  
//        "latitude":"1.2894376666",
//        "is_on_trip":true,
//        "id":8,
//        "longitude":"103.812434499"
//       },
//     ]
//   }
  
//   render() {
//     const { lat, lng, zoom } = this.state;
//     // const Markers = this.state.data.map(d => (
//     //   <Marker 
//     //     key = {d.id}
//     //     lat = {d.latitude}
//     //     lng = {d.longitude}
//     //     text="my marker"
//     //     fontColor="red"
//     //   />
//     // ))
  
//   return (
//     <div style={{ height: '100vh', width: '100%' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: 'AIzaSyCNuCP7BeVTvAhAayXJPQX8Qn9fPWBzTAc' }} 
//         defaultCenter={{lat, lng}}
//         center={[this.state.addLat, this.state.addLng]}
//         defaultZoom={zoom}
//         // onGoogleApiLoaded={({payload}) => this.redraw(payload)}
//       >
//         {/* {Markers} */}
//         <div>sdfsdf</div>
//       </GoogleMapReact>
//     </div>
//   )
//   }
// }