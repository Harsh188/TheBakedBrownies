import React from 'react'
import Slider from '../components/slider'
import Pref from '../components/prefrences'
// import { BlogPostCard } from '../components'


function Home(){
	
	return (
		<>
			<div>
				<h1>Home</h1>
				<div className = "Prefrences">
					<h2>Prefrences</h2>
					<Pref/>
				</div>
				<div className="Recipes">
					<h2>Recipes</h2>
				</div>
			</div>
		</>

	)
}

export default Home;