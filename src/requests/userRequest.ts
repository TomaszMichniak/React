import { User } from '../types/userType';

export function getUsers() {
	return fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
		response.json()
	);
}
export function getUser(userId: number) {
	return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
		(response) => response.json()
	);
}
