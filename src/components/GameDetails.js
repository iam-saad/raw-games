import React from 'react';
//Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
//Redux
import { useSelector } from 'react-redux';
//React Router
import { useNavigate } from 'react-router-dom';
//Image Resize
import { smallImage } from '../utli';

//IMAGES
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';

//Star Images
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

const GameDetail = ({ pathId }) => {
	const navigate = useNavigate();

	//Exit Detail
	const exitDetailHander = (e) => {
		const element = e.target;
		if (element.classList.contains('shadow')) {
			document.body.style.overflow = 'auto';
			navigate('/');
		}
	};
	//Get Stars
	const getStars = () => {
		const stars = [];
		const rating = Math.floor(gameDetails.rating);
		for (let i = 1; i <= 5; i++) {
			if (i <= rating) {
				stars.push(<img alt='star' key={i} src={starFull}></img>);
			} else {
				stars.push(<img alt='star' key={i} src={starEmpty}></img>);
			}
		}
		return stars;
	};

	//GET PLATFORM IMAGES
	const getPlatform = (platform) => {
		switch (platform) {
			case 'PlayStation':
				return playstation;
			case 'Xbox':
				return xbox;
			case 'PC':
				return steam;
			case 'Nintendo':
				return nintendo;
			case 'iOS':
				return apple;
			default:
				return gamepad;
		}
	};

	//Data
	const { gameDetails, screenshots, isLoading } = useSelector(
		(state) => state.details
	);
	return (
		<>
			{!isLoading && (
				<StyleCardShadow className='shadow' onClick={exitDetailHander}>
					<StyleDetail layoutId={pathId}>
						<StyleStats>
							<div className='rating'>
								<motion.h3 layoutId={`title ${pathId}`}>
									{gameDetails.name}
								</motion.h3>
								<p>Rating: {gameDetails.rating}</p>
								{getStars()}
							</div>
							<StyleInfo>
								<h3>Platforms</h3>
								<StylePlatforms>
									{gameDetails.platforms.map((data) => (
										<img
											alt={data.platform.name}
											key={data.platform.id}
											src={getPlatform(data.platform.name.split(' ')[0])}></img>
									))}
								</StylePlatforms>
							</StyleInfo>
						</StyleStats>
						<StyleMedia>
							<motion.img
								layoutId={`image ${pathId}`}
								src={smallImage(gameDetails.background_image, 1280)}
								alt={gameDetails.background_image}
							/>
						</StyleMedia>
						<StyleDescription>
							<p>{gameDetails.description_raw}</p>
						</StyleDescription>
						<div className='gallery'>
							{screenshots.map((screenshots) => (
								<img
									src={smallImage(screenshots.image, 1280)}
									key={screenshots.id}
									alt={screenshots.image}
								/>
							))}
						</div>
					</StyleDetail>
				</StyleCardShadow>
			)}
		</>
	);
};

const StyleCardShadow = styled(motion.div)`
	width: 100%;
	min-height: 100vh;
	overflow-y: scroll;
	background: rgba(0, 0, 0, 0.8);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 5;

	&::-webkit-scrollbar {
		width: 0.5rem;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #ff7676;
	}

	&::-webkit-scrollbar-track {
		background: white;
	}
`;

const StyleDetail = styled(motion.div)`
	width: 80%;
	border-radius: 1rem;
	padding: 2rem 5rem;
	background: white;
	position: absolute;
	left: 10%;
	color: black;
	z-index: 10;
	img {
		width: 100%;
	}
`;

const StyleStats = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	img {
		width: 2rem;
		height: 2rem;
		display: inline;
	}
`;
const StyleInfo = styled(motion.div)`
	text-align: center;
`;
const StylePlatforms = styled(motion.div)`
	display: flex;
	justify-content: space-evenly;
	img {
		margin-left: 3rem;
	}
`;

const StyleMedia = styled(motion.div)`
	margin-top: 5rem;
	img {
		width: 100%;
	}
`;

const StyleDescription = styled(motion.div)`
	margin: 5rem 0rem;
`;

export default GameDetail;
