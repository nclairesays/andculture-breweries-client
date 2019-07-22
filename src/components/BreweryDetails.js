import React from 'react'

const BreweryDetails = ({match}) => {
  // console.log(match.params.id)
  const { id } = match.params
  return (
    <div>
      something HERE
      {id}
    </div>
  )
}

export default BreweryDetails