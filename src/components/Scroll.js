import React from 'react';
import './Scroll.css';


const Scroll = (props) => {
	return (
		<div style={{
			overflow: 'scroll', 
			overflowX: 'hidden',
			// border: '1px solid black',
			height:'600px',
			// backgroundColor : 'red'
		}}>
		{props.children}
		</div>
		);
};

export default Scroll