import React, {useEffect, useState} from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from '../pages'
import { NavSection } from '../components/navBar'
import { SignIn } from '../pages/login'
import DiscreteSliderMarks from '../components/slider'
// import goalButtons from '../components/goal/goalButtons'

import axios from 'axios';


function App() {

	useEffect(()=>{
		axios.get("http://localhost:5000")
		.then(res =>  {
			console.log("yeet")
		})
		.catch(error => {console.log(error)})
  	}, []);

    return (
    	<>
	    	<div className = "App">
	    		<BrowserRouter>
	    			<Routes>

	    				<Route path="/" element={<><NavSection /> <DiscreteSliderMarks/> <Home /> </>}>

	    					<Route path='/login' exact component={<SignIn />}/>
	    				</Route>
	    			</Routes>
	    		</BrowserRouter>
	    	</div>
    	</>
    );
}

export default App;