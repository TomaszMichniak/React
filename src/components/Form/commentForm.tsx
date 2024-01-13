import { useEffect, FormEvent, useState } from 'react';
import { Comment } from '../../types/commentType';
interface CommentFormProps {
	comment?: Comment;
	postId: number;
	editingMode: boolean;
	closeEditMode: (editMode: boolean) => void;
	commentAdd: (newComment: Comment) => void;
	commentEdit: (comment: Comment) => void;
}

export default function CommentForm({
	comment,
	postId,
	editingMode,
	closeEditMode,
	commentEdit,
	commentAdd,
}: CommentFormProps) {
	const [id, setId] = useState<number>();
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [body, setBody] = useState<string>('');

	useEffect(() => {
		if (comment) {
			setId(comment.id);
			setName(comment.name);
			setEmail(comment.email);
			setBody(comment.body);
		}
	}, [comment]);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let data: Comment;
		if (editingMode) {
			data = {
				id: comment?.id ?? 0,
				postId: comment?.postId ?? 0,
				name: comment?.name ?? '',
				email: email ?? '',
				body: body ?? '',
			};
			commentEdit(data);
		} else {
			data = {
				id: id ?? 0,
				postId: postId,
				name: name ?? '',
				email: email ?? '',
				body: body ?? '',
			};
			commentAdd(data);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='border-2 rounded border-gray-200 p-4 mx-auto'
		>
			<div className='mb-4'>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					id='email'
					placeholder='Email'
					className='w-full p-2 border-2 rounded focus:outline-none focus:border-teal'
				/>
			</div>
			<div className='mb-4'>
				<textarea
					value={body}
					onChange={(e) => setBody(e.target.value)}
					placeholder='Body'
					className='w-full p-2 border-2 rounded focus:outline-none focus:border-teal'
				/>
			</div>
			<button
				type='submit'
				className='w-full bg-teal p-2  border-2 rounded rounded'
			>
				Submit
			</button>
			{editingMode && (
				<button
					className='w-full bg-teal p-2 my-2 border-2 rounded rounded'
					onClick={() => closeEditMode(false)}
				>
					Cancel
				</button>
			)}
		</form>
	);
}
