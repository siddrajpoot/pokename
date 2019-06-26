import React from 'react';

interface PokemonProps {
	name: string;
	id: string;
}

const Pokemon: React.FC<PokemonProps> = props => {

	return (
		<div className="pokemon">
			<img src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`} alt="pokemon" />
			<p>{props.name}</p>
		</div>
	)
}

export default Pokemon;