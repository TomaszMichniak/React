export function getCommentsByPostId(postId: number) {
	return fetch(
		`https://jsonplaceholder.typicode.com/comments?postId=${postId}`
	).then((response) => response.json());
}
