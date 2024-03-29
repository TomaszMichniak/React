import { getUser } from '../requests/userRequest';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types/userType';
import { useParams } from 'react-router-dom';
import '../index.css';

export default function UserList() {
	const [user, setUser] = useState<User | null>(null);
	let { userId } = useParams<{ userId: string }>();
	if (userId === undefined) {
		throw new Error('undefined Parms');
	}
	const userIdNumber = Math.abs(parseInt(userId));
	useEffect(() => {
		(async () => {
			const data = await getUser(userIdNumber);
			setUser(data);
		})();
	});

	return (
		<div className=''>
			{user && (
				<div className=' bg-white  rounded-2xl border-2 shadow overflow-hidden '>
					<div className='max-w-xs ml-auto mr-auto px-6 py-4'>
						<div className=' font-bold text-xl mb-2'>{user.name}</div>
						<p className='text-gray-700 text-base'>{user.username}</p>
						<p className='text-gray-700 text-base'>{user.email}</p>
						<p className='text-gray-700 text-base'>{user.phone}</p>
						<p className='text-gray-700 text-base'>{user.website}</p>
						<div className='px-6 pt-4 pb-2'>
							<Link
								to={`/`}
								className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
							>
								Post
							</Link>
							<Link
								to={`/user/${user.id}/todos`}
								className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
							>
								Todos
							</Link>
							<Link
								to={`/user/${user.id}/albums`}
								className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
							>
								Albums
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
