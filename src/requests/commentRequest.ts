import axios from 'axios';
import { Comment } from '../types/commentType';
export async function getCommentsByPostId(postId: number) {
	return await axios
		.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
		.then((response) => response.data);
}
export async function createComment(comment: Comment) {
	return await axios
		.post(`https://jsonplaceholder.typicode.com/comments`, comment)
		.then((response) => response.data);
}
