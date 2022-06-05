import React, { useState } from 'react';

//style and motion
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { searchGames } from '../actions/gamesActions';

const Nav = () => {
	const dispatch = useDispatch();
	const [query, setQuery] = useState('');
	//Event Handler
	const setInputHandler = (e) => {
		setQuery(e.target.value);
	};
	const searchGamesHandler = (e) => {
		e.preventDefault();
		dispatch(searchGames(query));
		setQuery('');
	};

	return (
		<StyleNav className='navbar'>
			<a href='/' id='logo'>
				Mad <span>Games.</span>
			</a>
			<form className='search'>
				<input
					onChange={setInputHandler}
					type='text'
					placeholder='search thousands of games here!'
				/>
				<button type='submit' onClick={searchGamesHandler}>
					search
				</button>
			</form>
		</StyleNav>
	);
};

const StyleNav = styled(motion.div)`
	padding: 5rem 5rem 0rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	#logo {
		flex: 1;
		font-size: 4rem;
		font-weight: 700;
		font-family: 'Montserrat', sans-serif;
		line-height: 1;
		padding-right: 5rem;
		span {
			display: block;
		}
	}
	form {
		flex: 3.4;
		position: relative;
	}
	input {
		padding: 1.3rem 2rem;
		border-radius: 1rem;
		border: none;
		background: #4d4d4d91;
		color: #fff;
		outline: none;
		font-size: 1.5rem;
		font-weight: lighter;
		transition: all 0.3s ease;
		width: 100%;
		display: inline-block;
		&:hover {
			background: #fff;
			color: #4d4d4d;
		}
	}
	button {
		padding: 1.35rem 2rem;
		font-size: 1.5rem;
		border: none;
		border-radius: 1rem;
		background: #4d4d4d;
		color: #fff;
		position: absolute;
		top: 0;
		right: 0;
		transition: all 0.3s ease;
		&:hover {
			background: #fff;
			color: #4d4d4d;
		}
	}
`;

export default Nav;
