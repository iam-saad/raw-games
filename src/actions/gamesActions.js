import axios from 'axios';
import {
	newGamesURL,
	popularGamesURL,
	searchGamesURL,
	upComingGamesURL,
} from '../api';

export const loadGames = () => async (dispatch) => {
	//Axios
	let popularGamesData;
	let upcomingGamesData;
	let newGamesData;
	try {
		popularGamesData = await axios.get(popularGamesURL());
		upcomingGamesData = await axios.get(upComingGamesURL());
		newGamesData = await axios.get(newGamesURL());
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
