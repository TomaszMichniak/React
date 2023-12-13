import { Post } from '../types/postType';

export function getPosts() {
	return fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
		response.json()
	);
}
export async function getUsersPost(userId: number) {
	return fetch(
		`https://jsonplaceholder.typicode.com/posts?userId=${userId}`
	).then((response) => response.json());
}
