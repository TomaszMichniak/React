import '../index.css';
import { useState, useEffect } from 'react';
import { Comment } from '../types/commentType';
import { createComment, getCommentsByPostId } from '../requests/commentRequest';
import CommentForm from './Form/commentForm';
export default function CommentsList({ postId }: { postId: number }) {
	const [comments, setComments] = useState<Comment[] | null>(null);
	const [comment, setComment] = useState<Comment | undefined>(undefined);
	useEffect(() => {
		(async () => {
			const data = await getCommentsByPostId(postId);
			setComments(data);
		})();
	}, []);

	const handleCommentCreate = async (newComment: Comment) => {
		const createdComment = await createComment(newComment);
		setComments((prevState) =>
			prevState ? [createdComment, ...prevState] : [createdComment]
		);
	};
	const handleCommentEdit = async (Comment: Comment) => {
		const createdComment = await createComment(Comment);
		setComments((prevState) =>
			prevState ? [createdComment, ...prevState] : [createdComment]
		);
	};
	return (
		<div>
			<CommentForm
				comment={comment}
				postId={postId}
				editingMode={false}
				commentAdd={handleCommentCreate}
				commentEdit={handleCommentEdit}
			></CommentForm>
			{comments?.map((comment, index) => (
				<div key={index} className=' border-b-4'>
					<p className='font-bold'>{comment.email}</p>
					<p className='text-sm text-gray-700'>{comment.body}</p>
					<button>Edit</button>
				</div>
			))}
		</div>
	);
}
