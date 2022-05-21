import axios from 'axios';
import { newGamesURL, popularGamesURL, upComingGamesURL } from '../api';

export const loadGames = () => async (dispatch) => {
  //Axios
	const popularGamesData = await axios.get(popularGamesURL());
	const upcomingGamesData = await axios.get(upComingGamesURL());
	const newGamesData = await axios.get(newGamesURL());

	dispatch({
		type: 'FETCH_GAMES',
		payload: {
			popular: popularGamesData.data.results,
			upcoming: upcomingGamesData.data.results,
			new: newGamesData.data.results,
		},
	});
};
