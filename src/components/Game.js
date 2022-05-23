import React from 'react';
//Styled Components
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Game = ({ name, released, image, id }) => {
	return (
		<GameDiv>
			<div className='image'>
				<img src={image} alt={name} />
			</div>
			<div className='description'>
				<h3>{name}</h3>
				<p>{released}</p>
			</div>
		</GameDiv>
	);
};

const GameDiv = styled(motion.div)`
	border-radius: 1rem;
	overflow: hidden;
	background-color: #202020;
	img {
		width: 100%;
		height: 250px;
		object-fit: cover;
	}
	.description {
		padding: 2rem;
	}
`;

export default Game;
