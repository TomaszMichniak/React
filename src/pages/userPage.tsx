import UserList from '../components/userList';
import Container from '../components/container';
import Header from '../components/header';
export default function UserPage() {
	return (
		<Container>
			<Header title='User' />
			<UserList />
		</Container>
	);
}
