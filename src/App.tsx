import React from 'react';
//import logo from './logo.svg';
import Test from './components/postList';
import User from './components/userList';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage';
import PostPage from './pages/postPage';

function App() {
	const id = 10;

	return (
		<div className='relative h-full w-full'>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/user/:id'>
					<Route path='posts' element={<PostPage />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
