import React from 'react';
import './Card.css';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Card = ({ name, email, id, details }) => {
	return (
		<div className='pokemon-card tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 '>
			<img className='pokemon-image' alt='robots' src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} />
			<div>
				<h2> {capitalizeFirstLetter(name)} </h2>
				<p> {"#"+id}</p>
				<p className = 'flavor-text'> <b>Flavor Text:</b>  {details[id-1]}</p>
			</div>
		</div>
	);
}

export default Card;