import React from 'react'
import axios from 'axios';


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
        	</div>
        </>
    );
}

export default App;