import React from 'react'
import Slider from '../components/slider'
import Pref from '../components/prefrences'
import Blog from './Blog'
// import { BlogPostCard } from '../components'

// theme
import ThemeConfig from '../theme';
import GlobalStyles from '../theme/globalStyles';

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
					<Blog />
				</div>
			</div>
		</>

	)
}

export default Home;