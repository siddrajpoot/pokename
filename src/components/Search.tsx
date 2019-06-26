import React, { useState } from 'react';
import Pokeball from '../assets/Pokeball.png';

interface SearchProps {
	onSearchSubmit: (name: string) => void;
}

const Search: React.FC<SearchProps> = (props) => {
	const { onSearchSubmit } = props;

	const [name, setName] = useState('')

	const onInputNameChange = (e: React.FormEvent<EventTarget>): void => {
		let { value } = e.target as HTMLInputElement;

		setName(value);
	}

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (name) onSearchSubmit(name);
	}

	const handlePokeballClick = () => {

	}

	return (
		<form className="search" onSubmit={handleSubmit}>
			<input
				value={name}
				name="name"
				type="text"
				onChange={onInputNameChange}
				placeholder="Enter your Name"
				autoComplete="off"
			/>
			<button
				type="submit"
				onClick={handlePokeballClick}
			>
				<img src={Pokeball} alt="pokeball-button" />
			</button>
		</form>
	)
}

export default Search;