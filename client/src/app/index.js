import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import NavSection from '../components/navBar/index'
import { SignIn } from '../pages/login'
import Pref from '../components/prefrences'

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

	    				<Route path="/" element={<> <Pref /> </>}>

	    				<Route path='/login' exact component={<SignIn />}/>
	    				</Route>
	    			</Routes>
	    		</BrowserRouter>
	    	</div>
    	</>
    );
}

export default App;