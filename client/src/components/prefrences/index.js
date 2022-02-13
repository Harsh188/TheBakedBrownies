import React, {useState} from 'react'
import SliderComponent from '../slider'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';




function Pref() {
const [slider1, setSlider1] = useState(50);
const [slider2, setSlider2] = useState(50);
const [slider3, setSlider3] = useState(50);
const [slider4, setSlider4] = useState(50);


const buttons = [
	<Button key="Lose" onClick={()=>{
		setSlider1(0) 
		setSlider2(50); 
		setSlider3(0);
		setSlider4(50);
	}}>Lose weight</Button>,
	<Button key="Maintain" onClick={()=>{
		setSlider1(0); 
		setSlider2(50);
		setSlider3(0);
		setSlider4(50);
	}}>Maintain weight</Button>,
	<Button key="Gain" onClick={()=>{
		setSlider1(0); 
		setSlider2(50); 
		setSlider3(0);
		setSlider4(50);
	}}>Gain weight</Button>,
  ];
  return (
	<>
	<div>
    	<Box
     	 sx={{
        	display: 'flex',
        	flexDirection: 'column',
        	alignItems: 'center',
        	'& > *': {
          	m: 1,
        	},
      	}}
    	>
      <ButtonGroup color="secondary" aria-label="medium secondary button group">
        {buttons}
      </ButtonGroup>
      <ButtonGroup size="large" aria-label="large button group">
        {buttons}
      </ButtonGroup>
    	</Box>

	
		<h3>Carbs</h3>
		<SliderComponent data={slider1} />
		<h3>Protein</h3>
		<SliderComponent data = {slider2} />
		<h3>Fat</h3>
		<SliderComponent data={slider3} />
		<h3>Fiber</h3>
		<SliderComponent data={slider4}/>
	</div>
	</>
  );
}

export default Pref;

				