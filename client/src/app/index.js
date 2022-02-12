import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from '../pages/login/SignIn'
//import SignInSide from '../pages/login';

function App() {
	const [getMessage, setGetMessage] = useState({})

	useEffect(()=>{
    	axios.get('http://localhost:5000/flask/hello').then(response => {
      		console.log("SUCCESS", response)
      		setGetMessage(response)
    	}).catch(error => {
      		console.log(error)
    	})
  	}, [])

    return (
        <>
        	<div className = "App">

            <Router>
        
      	        <Routes>
      		        <Route path='/login' exact component={SignIn}/>
                    
      	        </Routes>
        
            </Router>
        	</div>
        </>
    );
}

export default App;