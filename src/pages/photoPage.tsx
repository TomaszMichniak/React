import Container from '../components/container';
import Header from '../components/header';
import PhotosList from '../components/photosList';
export default function PhotoPage() {
	return (
		<Container>
			<Header title='Photos'></Header>
			<PhotosList />
		</Container>
	);
}
