const base_URL = 'https://api.rawg.io/api/';

const getCurrentMonth = () => {
	const month = new Date().getMonth() + 1;
	return month < 10 ? '0' + month : month;
};

const getCurrentDay = () => {
	const day = new Date().getDay() + 1;
	return day < 10 ? '0' + day : day;
};

const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();
const currentYear = new Date().getFullYear();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYearDate = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYearDate = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popularGames = `games?key=${process.env.REACT_APP_API}&dates=${lastYearDate},${currentDate}&ordering=-rating&page_size=10`;

const upcomingGames = `games?key=${process.env.REACT_APP_API}&dates=${currentDate},${nextYearDate}&ordering=-added&page_size=10`;

const newGames = `games?key=${process.env.REACT_APP_API}&dates=${lastYearDate},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_URL}${popularGames}`;
export const upComingGamesURL = () => `${base_URL}${upcomingGames}`;
export const newGamesURL = () => `${base_URL}${newGames}`;
