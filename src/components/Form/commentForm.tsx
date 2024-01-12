import React, { FormEvent, useState } from 'react';
import { Comment } from '../../types/commentType';
interface CommentFormProps {
	comment?: Comment;
	postId: number;
	editingMode: boolean;
	commentAdd: (newComment: Comment) => void;
	commentEdit: (comment: Comment) => void;
}

export default function CommentForm({
	comment,
	postId,
	editingMode,
	commentEdit,
	commentAdd,
}: CommentFormProps) {
	const [id, setId] = useState<number>();
	const [name, setName] = useState<string>();
	const [email, setEmail] = useState<string>();
	const [body, setBody] = useState<string>();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		const data: Comment = {
			id: id ?? 1110,
			postId: postId,
			name: name ?? '',
			email: email ?? '',
			body: body ?? '',
		};

		e.preventDefault();
		if (editingMode) {
			console.log(data);
			commentEdit(data);
		} else {
			console.log(data);
			commentAdd(data);
		}
	};
	return (
		<form onSubmit={handleSubmit} className=''>
			<div>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					id='email'
					placeholder='Email'
				/>
				<input
					value={body}
					onChange={(e) => setBody(e.target.value)}
					placeholder='Body'
				/>
				<button> Submit</button>
			</div>
		</form>
	);
}
