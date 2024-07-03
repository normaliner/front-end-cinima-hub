export const SERVER_URL = `${process.env.SERVER_URL}/api` as string;
export const API_URL = {
	root: (url = '') => `${url ? url : ''}`,
	auth: (url = '') => API_URL.root(`/auth${url}`),
	users: (url = '') => API_URL.root(`/users${url}`),
	movies: (url = '') => API_URL.root(`/movies${url}`),
	actors: (url = '') => API_URL.root(`/actors${url}`),
	genres: (url = '') => API_URL.root(`/genres${url}`),
	files: (url = '') => API_URL.root(`/files${url}`),
	reviews: (url = '') => API_URL.root(`/reviews${url}`),
	statistics: (url = '') => API_URL.root(`/statistics${url}`),
	payments: (url = '') => API_URL.root(`/payments${url}`),
};
