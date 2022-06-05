const initState = {
	popularGames: [],
	newGames: [],
	upComingGames: [],
	searched: [],
};

const gamesReducer = (state = initState, action) => {
	switch (action.type) {
		case 'FETCH_GAMES':
			return {
				...state,
				popularGames: action.payload.popular,
				upComingGames: action.payload.upcoming,
				newGames: action.payload.new,
			};
		case 'SEARCH_GAMES':
			return {
				...state,
				searched: action.payload.searched,
			};
		default:
			return { ...state };
	}
};

export default gamesReducer;
