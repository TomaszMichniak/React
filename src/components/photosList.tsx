import { useState, useEffect } from 'react';
import { Photo } from '../types/photoType';
import { useParams } from 'react-router';
import { getPhotoByAlbumId } from '../requests/photoRequest';

export default function PhotosList() {
	const [photos, setPhotos] = useState<Photo[] | null>(null);
	let { albumId } = useParams<{ albumId: string }>();
	if (albumId === undefined) {
		throw new Error('undefined Parms');
	}
	const albumIdNumber = Math.abs(parseInt(albumId));
	useEffect(() => {
		(async () => {
			const data = await getPhotoByAlbumId(albumIdNumber);
			setPhotos(data);
		})();
	});
	return (
		<div className=' h-100 w-full flex items-center justify-center '>
			<div className='grid grid-cols-2 md:grid-cols-2 gap-4 p-5'>
				{photos?.map((photo, index) => (
					<div key={index}>
						<img
							className='h-auto max-w-full rounded-lg'
							src={photo.url}
							alt=''
						/>
					</div>
				))}
			</div>
		</div>
	);
}
