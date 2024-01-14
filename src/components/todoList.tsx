import { useEffect, useState } from 'react';
import { Todo } from '../types/todoType';
import { useParams } from 'react-router';
import { changeCompleted, getUsersTodos } from '../requests/todoRequest';
import { deleteTodo, createTodo } from '../requests/todoRequest';
import TodoForm from './Form/todoForm';

export default function TodoList() {
	const [todos, setTodos] = useState<Todo[] | null>(null);
	let { userId } = useParams<{ userId: string }>();
	if (userId === undefined) {
		throw new Error('undefined Parms');
	}
	const userIdNumber = Math.abs(parseInt(userId));
	useEffect(() => {
		(async () => {
			const data = await getUsersTodos(userIdNumber);
			setTodos(data);
		})();
	}, []);

	const handleDelete = async (todoId: number) => {
		return deleteTodo(todoId).then(() =>
			setTodos((prevState) => {
				return prevState?.filter((todo) => todoId !== todo.id) ?? [];
			})
		);
	};

	const handleCreateTodo = async (newTodo: Todo) => {
		const createdTodo = await createTodo(newTodo);
		setTodos((prevState) =>
			prevState ? [createdTodo, ...prevState] : [createdTodo]
		);
	};

	const handeleDone = async (todoId: number, completed: boolean) => {
		await changeCompleted(todoId, completed).then(() =>
			setTodos((prevState) => {
				return (
					prevState?.map((todo) =>
						todo.id === todoId ? { ...todo, completed: !completed } : todo
					) ?? []
				);
			})
		);
	};

	return (
		<div className=''>
			<div>
				<TodoForm user={userIdNumber} onCreateTodo={handleCreateTodo} />
			</div>

			<div className='p-3 mt-3  bg-white rounded-2xl border-2 shadow'>
				{todos?.map((todo, index) => (
					<div
						key={index}
						className='flex mb-5 items-center border-b-2 border-gray-500'
					>
						<p className='w-full text-grey-darkest'> {todo.title}</p>

						<button
							onClick={() => handeleDone(todo.id, todo.completed)}
							className='flex-no-shrink p-2 ml-4 mr-2 rounded-full'
						>
							{todo.completed ? (
								<img
									src='/icons/doneIconGreen.svg'
									alt='Done'
									className='w-8'
								/>
							) : (
								<img
									src='/icons/doneIconGray.svg'
									alt='Not Done'
									className='w-8'
								/>
							)}
						</button>
						<button
							onClick={() => handleDelete(todo.id)}
							className='flex-no-shrink p-2 ml-2 rounded-full '
						>
							<img src='/icons/bin.svg' alt='Bin' className='w-8' />
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
