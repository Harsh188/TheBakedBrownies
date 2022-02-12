import React, {useEffect, useState} from 'react'
import axios from 'axios';


function App() {
	const [member, setMember] = useState(0);

	useEffect(()=>{
		axios.get("http://localhost:5000/members")
		.then(res =>  {console.log("yeet")})
		.catch(error => {console.log(error)})
  	}, []);

    return (
    	<>
	    	<div className = "App">
	    		<p>{member}</p>
	    	</div>
    	</>
    );
}

export default App;