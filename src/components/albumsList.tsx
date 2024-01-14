import { useEffect, useState } from 'react';
import { Album } from '../types/albumType';
import { getUserAlbums } from '../requests/albumRequest';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function AlbumsList() {
	const [albums, setAlbums] = useState<Album[] | null>(null);
	let { userId } = useParams<{ userId: string }>();
	if (userId === undefined) {
		throw new Error('undefined Parms');
	}
	const userIdNumber = Math.abs(parseInt(userId));
	useEffect(() => {
		(async () => {
			const data = await getUserAlbums(userIdNumber);
			setAlbums(data);
		})();
	}, []);

	return (
		<div className='bg-white rounded-2xl border-2 shadow'>
			<table className='w-full table-auto '>
				<thead>
					<tr className=''>
						<th className=''>Id</th>
						<th>Title</th>
						<th className='p-2'>Actions</th>
					</tr>
				</thead>
				<tbody>
					{albums?.map((album, index) => (
						<tr key={index} className='border text-center'>
							<td className='p-2'>{album.id}</td>
							<td className='p-1'>{album.title}</td>
							<td className=''>
								<Link
									className='block w-5 ml-auto mr-auto'
									to={`${album.id}/photos`}
								>
									<img
										src='/icons/photoIcon.svg'
										alt='Photos'
										className='w-5'
									/>
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
