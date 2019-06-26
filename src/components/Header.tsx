import React from 'react';
import Logo from '../assets/Pokename.png'

const Header: React.FC = () => {
	return (
		<div className="header">
			<img src={Logo} alt="header" />
		</div>
	);
}

export default Header;
