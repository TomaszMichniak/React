import { User } from '../types/userType';
import axios from 'axios';

export async function getUser(userId: number) {
	return await axios
		.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
		.then((response) => response.data);
}
