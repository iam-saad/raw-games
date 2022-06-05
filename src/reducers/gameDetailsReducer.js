const initialState = {
	gameDetails: {},
	screenshots: [],
	isLoading: true,
};

const gameDetailsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_DETAILS':
			return {
				...state,
				gameDetails: action.payload.details,
				screenshots: action.payload.screenshot,
				isLoading: false,
			};
		case 'IS_LOADING':
			return {
				...state,
				isLoading: true,
			};
		default:
			return { ...state };
	}
};

export default gameDetailsReducer;
