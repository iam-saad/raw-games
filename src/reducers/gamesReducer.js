const initState = {
	popularGames: [],
	newGames: [],
	upComingGames: [],
	searched: [],
	isLoading: true,
};

const gamesReducer = (state = initState, action) => {
	switch (action.type) {
		case 'LOADER':
			return {
				...state,
				isLoading: true,
			};
		case 'FETCH_GAMES':
			return {
				...state,
				popularGames: action.payload.popular,
				upComingGames: action.payload.upcoming,
				newGames: action.payload.new,
				isLoading: false,
			};
		case 'MORE_POPULAR_GAMES':
			return {
				...state,
				popularGames: [...state.popularGames, ...action.payload.nextpage],
			};
		case 'MORE_NEW_GAMES':
			return {
				...state,
				newGames: [...state.newGames, ...action.payload.nextpage],
			};
		case 'MORE_UPCOMING_GAMES':
			return {
				...state,
				upComingGames: [...state.upComingGames, ...action.payload.nextpage],
			};
		case 'SEARCH_GAMES':
			return {
				...state,
				searched: action.payload.searched,
			};
		case 'CLEAR_SEARCH':
			return {
				...state,
				searched: [],
			};
		default:
			return { ...state };
	}
};

export default gamesReducer;
