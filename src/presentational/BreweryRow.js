import React from 'react';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Route } from 'react-router-dom'
import BreweryDetails from './BreweryDetails';
import '../styles/BreweryRow.scss'



const BreweryRow = (brewery) => {
    const { id, name, brewery_type, street, city, state, postal_code, website_url} = brewery
    return (
        <tr className='brewery'>
            <td>
                <Link to={{
                    pathname: `/breweries/${id}`,
                    state: brewery
                    }}>{name}
                </Link> 
                <Route path="/breweries/:id" {...brewery} component={BreweryDetails} />
            </td>
            <td>
                <a href={website_url} target='blank'> 
                    <FontAwesomeIcon icon={faExternalLinkAlt} size='xs' style={{color: 'black'}}/>
                </a>
            </td>
            <td>{brewery_type}</td> 
            <td>{street}</td>
            <td>{city}</td>
            <td>{state}</td>
            <td>{postal_code}
            </td>
        </tr>
    )
};

export default BreweryRow


