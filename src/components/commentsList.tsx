import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import '../index.css';
import { useState, useEffect } from 'react';
import { Comment } from '../types/commentType';
import {
	deleteComment,
	editComment,
	createComment,
	getCommentsByPostId,
} from '../requests/commentRequest';
import CommentForm from './Form/commentForm';
export default function CommentsList({ postId }: { postId: number }) {
	const [comments, setComments] = useState<Comment[] | null>(null);
	const [commentToEdit, setCommentToEdit] = useState<Comment | undefined>(
		undefined
	);
	const [editMode, setEditMode] = useState<boolean>(false);
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
	const handleCommentEdit = async (comment: Comment) => {
		try {
			await editComment(comment).then(() => {
				setComments((prevState) => {
					return (prevState || []).map((c) => {
						if (c.id === comment.id) {
							return comment;
						} else {
							return c;
						}
					});
				});
			});
		} catch (error) {
			console.log('Error');
		}
	};
	const handleEditMode = (comment: Comment) => {
		setCommentToEdit(comment);
		toogleEditMode(true);
	};
	const toogleEditMode = (boolean: boolean) => {
		setEditMode(boolean);
	};
	const handleDelete = async (commentId: number) => {
		await deleteComment(commentId).then(() =>
			setComments((prevState) => {
				return prevState?.filter((comment) => comment.id !== commentId) ?? [];
			})
		);
	};
	return (
		<div>
			<CommentForm
				comment={commentToEdit}
				postId={postId}
				editingMode={editMode}
				closeEditMode={toogleEditMode}
				commentAdd={handleCommentCreate}
				commentEdit={handleCommentEdit}
			></CommentForm>
			{editMode && (
				<button onClick={() => toogleEditMode(false)}>Exit Edit</button>
			)}
			{comments?.map((comment, index) => (
				<div key={index} className=' border-b-4'>
					<p className='font-bold'>{comment.email}</p>
					<p className='text-sm text-gray-700'>{comment.body}</p>
					<button onClick={() => handleEditMode(comment)}>
						<img src='/icons/editIcon.svg' alt='Edit' className='w-5' />
					</button>
					<button onClick={() => handleDelete(comment.id)}>
						<img src='/icons/bin.svg' alt='Bin' className='w-5' />
					</button>
				</div>
			))}
		</div>
	);
}
