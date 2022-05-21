const initState = {
	popularGames: [],
	newGames: [],
	upComingGames: [],
	searched: [],
};

const gamesReducer = (state = initState, action) => {
	switch (action.type) {
		case 'FETCH_GAMES':
			return { ...state };
		default:
			return { ...state };
	}
};

export default gamesReducer;
