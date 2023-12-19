import '../index.css';
import { useState, useEffect } from 'react';
import { Comment } from '../types/commentType';
import { getCommentsByPostId } from '../requests/commentRequest';
export default function CommentsList({ postId }: { postId: number }) {
	const [comments, setComments] = useState<Comment[] | null>(null);

	useEffect(() => {
		(async () => {
			const data = await getCommentsByPostId(postId);
			setComments(data);
		})();
	}, []);
	return (
		<div>
			{comments?.map((comment, index) => (
				<div key={index} className=' border-b-4'>
					<p className='font-bold'>{comment.email}</p>
					<p className='text-sm text-gray-700'>{comment.body}</p>
				</div>
			))}
		</div>
	);
}
