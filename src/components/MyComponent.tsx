import React from 'react';
import superman from '../assets/image/superman.png';
import './MyComponent.scss';

export const MyComponent: React.FC = () => {
	return (
		<>
			<h1>Almost before we knew it,</h1>
			<img src={superman} alt="" />
		</>
	);
};
