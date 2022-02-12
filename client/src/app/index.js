import React, {useEffect, useState} from 'react'
import axios from 'axios';


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
	    		<p>{member}</p>
	    	</div>
    	</>
    );
}

export default App;