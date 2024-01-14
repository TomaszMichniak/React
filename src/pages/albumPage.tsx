import AlbumsList from '../components/albumsList';
import Container from '../components/container';
import Header from '../components/header';
export default function AlbumPage() {
	return (
		<Container>
			<Header title='Albums' />
			<AlbumsList />
		</Container>
	);
}
