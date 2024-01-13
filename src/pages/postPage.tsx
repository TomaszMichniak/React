import PostList from '../components/postList';
import Container from '../components/container';
import Header from '../components/header';
export default function PostPage() {
	return (
		<Container>
			<Header title='Posts' />
			<PostList />
		</Container>
	);
}
