import React from 'react';
import './App.scss';
import ListOfBreweries from './components/ListOfBreweries';
import BreweryDetails from './components/BreweryDetails'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";


function App() {
	return (
		<Router>
			<nav>
				<Link to="/">Home</Link>
			</nav>
			<Switch>
				<Route exact path="/" render={() =>  <Redirect to='/breweries' />}/>
				<Route path="/breweries/:id" render={(props) => <BreweryDetails {...props}/>} />
				<Route path="/breweries" component={ListOfBreweries} />
			</Switch>
   	 	</Router>
	);
}

export default App;
