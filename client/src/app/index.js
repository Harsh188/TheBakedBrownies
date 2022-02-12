
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from '../pages/login/SignIn'
//import SignInSide from '../pages/login';

function App() {
	const [member, setMember] = useState(0);

	useEffect(()=>{
		axios.get("https://the-baked-brownies.herokuapp.com/members")
		.then(res =>  {
			console.log("yeet")
			setMember(res)
		})
		.catch(error => {console.log(error)})
  	}, []);

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