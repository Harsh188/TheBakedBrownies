import React, {useEffect, useState} from 'react'
import axios from 'axios';


function App() {
	const [member, setMember] = useState(0);

	useEffect(()=>{
    	fetch("/members").then(
    		response => response.json()
    	).then(
    		data => {
    			setMember(data.member)
    			console.log(data.member)
    		}
    	)
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