import { Post } from "../types/postType";

export function getPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json());
}