import { getUsers } from '../requests/userRequest';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types/userType';
import '../index.css';

export default function UserList() {
	const [users, setUser] = useState<User[] | null>(null);
	useEffect(() => {
		(async () => {
			const data = await getUsers();
			setUser(data);
		})();
	});

	return (
		<div className='overflow-x-auto'>
			<table className='min-w-full table-auto border text-center '>
				<thead>
					<tr className='border'>
						<th> Id</th>
						<th>Name</th>
						<th>Email</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{users
						? users.map((user, index) => (
								<tr className='border hover:bg-blue-500 '>
									<td>{user.id}</td>
									<td className='border'>{user.name}</td>
									<td className='border'>{user.email}</td>
									<td>
										<Link
											to={`user/${user.id}/posts`}
											className='btn btn-xs btn-active btn-neutral join-item'
										>
											Posts
										</Link>
									</td>
								</tr>
						  ))
						: null}
				</tbody>
			</table>
		</div>
	);
}
