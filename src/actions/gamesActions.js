import axios from 'axios';
import {
	newGamesURL,
	popularGamesURL,
	searchGamesURL,
	upComingGamesURL,
} from '../api';

//Global Variables
let popularGamesData;
let upcomingGamesData;
let newGamesData;
let nextPopularURL;
let nextUpcomingURL;
let nextNewURL;

export const loadGames = () => async (dispatch) => {
	dispatch({
		type: 'LOADER',
	});
	//Axios
	try {
		popularGamesData = await axios.get(popularGamesURL());
		upcomingGamesData = await axios.get(upComingGamesURL());
		newGamesData = await axios.get(newGamesURL());
		nextPopularURL = popularGamesData.data.next;
		nextUpcomingURL = upcomingGamesData.data.next;
		nextNewURL = newGamesData.data.next;
	} catch (e) {
		console.log(e);
	}

	dispatch({
		type: 'FETCH_GAMES',
		payload: {
			popular: popularGamesData.data.results,
			upcoming: upcomingGamesData.data.results,
			new: newGamesData.data.results,
		},
	});
};

export const searchGames = (query) => async (dispatch) => {
	let searchedGames;
	try {
		searchedGames = await axios.get(searchGamesURL(query));
	} catch (e) {
		console.log(e);
	}

	dispatch({
		type: 'SEARCH_GAMES',
		payload: {
			searched: searchedGames.data.results,
		},
	});
};

export const clearedSearch = () => (dispatch) => {
	dispatch({
		type: 'CLEAR_SEARCH',
	});
};

export const loadMore = (variable) => async (dispatch) => {
	let result;

	if (variable === 'popularGamesData') {
		try {
			result = await axios.get(nextPopularURL);
			nextPopularURL = result.data.next;
		} catch (e) {
			console.log(e);
		}
		dispatch({
			type: 'MORE_POPULAR_GAMES',
			payload: {
				nextpage: result.data.results,
			},
		});
	}
	if (variable === 'upcomingGamesData') {
		try {
			result = await axios.get(nextUpcomingURL);
			nextUpcomingURL = result.data.next;
		} catch (e) {
			console.log(e);
		}
		dispatch({
			type: 'MORE_UPCOMING_GAMES',
			payload: {
				nextpage: result.data.results,
			},
		});
	}
	if (variable === 'newGamesData') {
		try {
			result = await axios.get(nextNewURL);
			nextNewURL = result.data.next;
		} catch (e) {
			console.log(e);
		}
		dispatch({
			type: 'MORE_NEW_GAMES',
			payload: {
				nextpage: result.data.results,
			},
		});
	}
};
