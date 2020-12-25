import React from 'react';
import Card from './Card';
import './CardList.css';


const CardList = ( {pokemons,pokemon_details} ) => {
	return (
		<div>
			{
			pokemons.map((user,i) => { 
			return <Card
			details = {pokemon_details}
			key = {i} 
		 	id= {pokemons[i].entry_number}
		 	name={pokemons[i].pokemon_species.name}
		 	email = {pokemons[i].email}
		 	/>
			})
		}
		</div>	
	);
}

export default CardList;