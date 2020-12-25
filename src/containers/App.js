import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			pokemons: [],
			pokemon_details: [],
			searchfield: ''
		}
	}

	fetchPokemon() {
		fetch('https://pokeapi.co/api/v2/pokedex/1/')
		.then(response => response.json())
		.then(data => {
			this.setState({pokemons: data.pokemon_entries});
			data.pokemon_entries.forEach(pokemon => {
			fetch(pokemon.pokemon_species.url)
			.then(resp => resp.json())
			.then(detail =>{
				this.setState(prevState => ({
					pokemon_details: [...prevState.pokemon_details,detail.flavor_text_entries[1].flavor_text]
				}))
				})
			})
			}
			)
	}

	componentDidMount() {
		this.fetchPokemon()
	}	

	onSearchChange = (event) => {
		this.setState( {
			searchfield: event.target.value
		}
		);
		this.state.pokemons.filter(pokemon =>
			{
				return pokemon.pokemon_species.name.toLowerCase()
				.includes(this.state.searchfield.toLowerCase());
			}
			)
	}

	render() {
		const { pokemons,pokemon_details, searchfield} =this.state;
		const filteredPokemons = pokemons.filter(pokemon =>
			{	
				return pokemon.pokemon_species.name.toLowerCase()
				.includes(searchfield.toLowerCase());
			})


		return !pokemons.length?<h1>Loading</h1> :
		(
			<div className = 'tc'>
				<h1 className='f2'> PokeDex </h1>
				<SearchBox  searchChange = {this.onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
					<CardList pokemons = {filteredPokemons}
					 pokemon_details = {pokemon_details} />
					</ErrorBoundary>
				</Scroll>
				</div>
		);
	}
}


export default App;