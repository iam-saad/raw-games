import React, { useEffect } from 'react';
//Components
import Game from '../components/Game';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesActions';
//Style Components and Framer Motion
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadGames());
	}, [dispatch]);

	const { popularGames, upComingGames, newGames } = useSelector(
		(state) => state.games
	);
	return (
		<GameList>
			<h2>Upcoming Games</h2>
			<Games>
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
			</Games>

			<h2>Popular Games</h2>
			<Games>
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
			</Games>

			<h2>New Games</h2>
			<Games>
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
			</Games>
		</GameList>
	);
};

const GameList = styled(motion.div)`
	padding: 8rem 5rem;
	h2 {
		padding-top: 3rem;
	}
`;

const Games = styled(motion.div)`
	padding: 5rem 0rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	grid-column-gap: 3rem;
	grid-row-gap: 3rem;
`;

export default Home;
