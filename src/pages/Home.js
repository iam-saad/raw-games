import React, { useEffect } from 'react';
//Components
import Game from '../components/Game';
import GameDetail from '../components/GameDetails';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesActions';
//Style Components and Framer Motion
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Home = () => {
	const location = useLocation();
	const pathId = location.pathname.split('/')[2];

	//FETCH GAMES
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadGames());
	}, [dispatch]);

	const { popularGames, upComingGames, newGames, searched } = useSelector(
		(state) => state.games
	);
	return (
		<StyleGameList>
			<AnimateSharedLayout>
				<AnimatePresence type='crossfade'>
					{pathId && <GameDetail pathId={pathId} />}
				</AnimatePresence>
				{searched.length ? (
					<StyleGames>
						<h2>Games based on your search</h2>
						{searched.map((game) => (
							<Game
								name={game.name}
								released={game.released}
								id={game.id}
								image={game.background_image}
								key={game.id}
							/>
						))}
					</StyleGames>
				) : (
					''
				)}
				<StyleGames>
					<h2>Popular and trending</h2>
					{popularGames &&
						popularGames.map((game) => (
							<Game
								name={game.name}
								released={game.released}
								id={game.id}
								image={game.background_image}
								key={game.id}
							/>
						))}
				</StyleGames>
				<button>Load More</button>

				<StyleGames>
					<h2>New Games</h2>
					{newGames &&
						newGames.map((game) => (
							<Game
								name={game.name}
								released={game.released}
								image={game.background_image}
								id={game.id}
								key={game.id}
							/>
						))}
				</StyleGames>
				<button>Load More</button>

				<StyleGames>
					<h2>Upcoming Games</h2>
					{upComingGames &&
						upComingGames.map((game) => (
							<Game
								name={game.name}
								released={game.released}
								image={game.background_image}
								id={game.id}
								key={game.id}
							/>
						))}
				</StyleGames>
				<button>Load More</button>
			</AnimateSharedLayout>
		</StyleGameList>
	);
};

const StyleGameList = styled(motion.div)`
	padding: 8rem 5rem;
	h2 {
		padding-top: 3rem;
	}
	p {
		padding-top: 1.5rem;
	}
	button {
		display: block;
		margin: 5rem auto;
		padding: 1.5rem 7rem;
		font-size: 1.5rem;
		border: none;
		border-radius: 0.5rem;
		background: #ffffff;
		color: #000;
		transition: all 0.5s ease;
		&:hover {
			background: #515151;
			color: #fff;
		}
	}
`;

const StyleGames = styled(motion.div)`
	padding: 5rem 0rem;
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	grid-gap: 3rem;
`;

export default Home;
