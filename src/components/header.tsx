import { useNavigate } from 'react-router';

export default function ({ title }: { title: string }) {
	const navigate = useNavigate();

	return (
		<div className='mb-4 flex items-center border-b-2 border-gray-500 '>
			<h1 className='text-grey-darkest text-lg ml-auto mr-auto'>{title}</h1>
			<button className='ml-auto' onClick={() => navigate(-1)}>
				<img src='/icons/backIcon.svg' alt='GoBack' className='w-9' />
			</button>
		</div>
	);
}
