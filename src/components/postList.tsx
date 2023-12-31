import React, { useEffect, useState } from 'react';
import { Post } from '../types/postType';
import { getPosts } from '../requests/postRequest';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import '../index.css';
import CommentsList from './commentsList';

export default function PostList() {
	const [posts, setPosts] = useState<Post[] | null>(null);
	const [showCommentsMap, setShowCommentsMap] = useState<{
		[postId: number]: boolean;
	}>({});
	useEffect(() => {
		(async () => {
			const data = await getPosts();
			setPosts(data);
		})();
	}, []);
	const handleButtonClick = (postId: number) => {
		setShowCommentsMap((prev) => ({
			...prev,
			[postId]: !prev[postId],
		}));
	};
	return (
		<div className='mx-2'>
			{posts?.slice(0, 20).map((post, index) => (
				<div className='flex bg-white  mt-2 mx-auto items-center justify-center max-w-sm rounded overflow-hidden shadow-lg'>
					<div key={index} className='px-6 py-4 '>
						<div className='font-bold text-xl mb-2'>{post.title}</div>
						<p className='text-gray-700 text-base'>{post.body}</p>
						<div className='px-6 pt-4 pb-2'>
							<Link
								to={`/user/${post.userId}`}
								className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
							>
								User
							</Link>
							<button
								onClick={() => handleButtonClick(post.id)}
								className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
							>
								{showCommentsMap[post.id] ? 'Hide Comments' : 'Show Comments'}{' '}
							</button>
						</div>
						{showCommentsMap[post.id] && (
							<CommentsList postId={post.id}></CommentsList>
						)}{' '}
					</div>
				</div>
			))}
		</div>
	);
}
