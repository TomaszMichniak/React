import React, { useEffect, useState } from 'react';
import { Post } from '../types/postType';
import { getPosts } from '../requests/postRequest';

export default function PostList() {
	const [posts, setPosts] = useState<Post[] | null>(null);
	useEffect(() => {
		(async () => {
			const data = await getPosts();
			setPosts(data);
		})();
	}, []);

	return (
		<div>
			{posts
				? posts.map((post, index) => (
						<div className='postBox' key={index}>
							<div className='postTitle'>{post.title}</div>
							<div className='postBody'>{post.body}</div>
						</div>
				  ))
				: null}
		</div>
	);
}
