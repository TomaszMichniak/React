import { title } from 'process';
import Container from '../components/container';
import Header from '../components/header';
import TodoList from '../components/todoList';

export default function TodoPage() {
	return (
		<Container>
			<Header title='Todos' />
			<TodoList />
		</Container>
	);
}
