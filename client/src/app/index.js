import React, {useEffect, useState} from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from '../pages'
import { NavSection } from '../components/navBar'
import { SignIn } from '../pages/login'
import Slider from '../components/slider'

import axios from 'axios';


function App() {
	const [member, setMember] = useState(0);

	useEffect(()=>{
		axios.get("http://localhost:5000/members")
		.then(res =>  {
			console.log("yeet")
			setMember(res)
		})
		.catch(error => {console.log(error)})
  	}, []);

    return (
    	<>
	    	<div className = "App">
	    		<BrowserRouter>
	    			<Routes>
	    				<Route path="/" element={<><NavSection /><Home /></>}>
	    					<Route path='/login' exact component={<SignIn />}/>
	    				</Route>
	    			</Routes>
	    		</BrowserRouter>
	    	</div>
    	</>
    );
}

export default App;