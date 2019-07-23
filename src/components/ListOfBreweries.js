import React, { Component } from 'react';
import BreweryRow from '../presentational/BreweryRow';
import { api } from '../constants'
import './ListOfBreweries.scss'

export default class ListOfBreweries extends Component {
	state = {
		breweries: [],
	};

	componentDidMount() {
		//cities in database: Portland, Asheville, Bend, and Boulder
		fetch(`${api}?by_city=portland`)
		.then(res => res.json())
		.then(breweries => this.setState({ breweries }));
	}

	showBreweries = (breweries) => (
		breweries.length !== 0
		? breweries.map( brewery => <BreweryRow {...brewery} key={brewery.id} />)
		: null
	)

	render() {
		const { breweries } = this.state
		return (
			<table className={'list-of-breweries'}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Site</th>
						<th>Brewery Type</th> 
						<th>Street</th>
						<th>City</th>
						<th>State</th>
						<th>Zip Code</th>
					</tr>
				</thead>
				<tbody>
					{this.showBreweries(breweries)}
				</tbody>
			</table>
		);
	}
}