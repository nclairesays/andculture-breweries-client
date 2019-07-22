import React from 'react';
import './App.scss';
import ListOfBreweries from './components/ListOfBreweries';
import BreweryDetails from './components/BreweryDetails'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";


function App() {
	return (
		<Router>
			<div>
				<nav>
					<Link to="/">Home</Link>
				</nav>
			<Switch>
				<Route exact path="/" render={() =>  <Redirect to='/breweries' />}/>
				<Route path="/breweries/:id" component={BreweryDetails} />
				<Route path="/breweries" component={ListOfBreweries} />
			</Switch>
		</div>
    </Router>
	);
}

export default App;
