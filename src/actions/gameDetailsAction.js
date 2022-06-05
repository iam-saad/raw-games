import axios from 'axios';
import { gameDetailsURL, gameScreenshotsURL } from '../api';

export const loadGameDetails = (id) => async (dispatch) => {
	dispatch({
		type: 'IS_LOADING',
	});

	let gameDetails;
	let gameScreenShots;
	try {
		gameDetails = await axios.get(gameDetailsURL(id));
		gameScreenShots = await axios.get(gameScreenshotsURL(id));
	} catch (e) {
		console.log(e);
	}

	dispatch({
		type: 'GET_DETAILS',
		payload: {
			details: gameDetails.data,
			screenshot: gameScreenShots.data.results,
		},
	});
};
