import { useState, ChangeEvent, FormEvent } from 'react';
import { Todo } from '../../types/todoType';

interface TodoFormProps {
	user: number;
	onCreateTodo: (newTodo: Todo) => void;
}

export default function TodoForm({ user, onCreateTodo }: TodoFormProps) {
	const [newTodo, setNewTodo] = useState<Todo>({
		id: 1000,
		userId: user,
		title: '',
		completed: false,
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setNewTodo((prevTodo) => ({
			...prevTodo,
			[name]: value,
		}));
	};

	const handleCreateTodo = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (newTodo.title == '') return;
		await onCreateTodo(newTodo);
		setNewTodo((prevTodo) => ({
			...prevTodo,
			title: '',
		}));
	};

	return (
		<form onSubmit={handleCreateTodo}>
			<div className='flex mt-4'>
				<input
					type='text'
					name='title'
					value={newTodo.title}
					onChange={handleInputChange}
					className='shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker'
					placeholder='Add Todo'
				/>
				<button
					type='submit'
					className='flex-no-shrink shadow bg-white p-2 border-2 rounded text-teal  '
				>
					Submit
				</button>
			</div>
		</form>
	);
}
