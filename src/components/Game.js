import React from 'react';

import { useDispatch } from 'react-redux';
import { loadGameDetails } from '../actions/gameDetailsAction';
//Styled Components
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
//Image Resize
import { smallImage } from '../utli';

const Game = ({ name, released, image, id }) => {
	const stringId = id.toString();
	const dispatch = useDispatch();
	const loadGameDetailsHandler = () => {
		document.body.style.overflow = 'hidden';
		dispatch(loadGameDetails(id));
	};
	return (
		<StyleGameDiv
			onClick={loadGameDetailsHandler}
			layoutId={stringId}
			// onMouseOver={loadGameDetailsHandler}
		>
			<Link to={`/game/${id}`}>
				<div className='game-container'>
					<div className='image'>
						<motion.img
							layoutId={`image ${stringId}`}
							src={smallImage(image, 640, name)}
							alt={name}
						/>
					</div>
					<div className='description'>
						<motion.h3 layoutId={`title ${stringId}`}>{name}</motion.h3>
						<p>{released}</p>
						<div className='metadata'>
							<h3>{name}</h3>
							<p>{released}</p>
						</div>
					</div>
				</div>
			</Link>
		</StyleGameDiv>
	);
};

const StyleGameDiv = styled(motion.div)`
	border-radius: 1rem;
	overflow: hidden;
	background-color: #202020;
	position: relative;
	cursor: pointer;
	img {
		width: 100%;
		height: 250px;
		object-fit: cover;
	}
	.description {
		padding: 2rem;
	}
	.metadata {
		display: none;
	}
	/* &:hover {
		height: 100%;
		.game-container {
			position: absolute;
			top: 0;
			left: 0;
			height: 600px;
		}
		.description {
			min-height: 70vh;
		}
		.metadata {
			display: block;
		}
	} */
`;

export default Game;
