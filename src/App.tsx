import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserPage from './pages/userPage';
import PostPage from './pages/postPage';

function App() {
	return (
		//<div className='relative h-full w-full'>
		<Routes>
			<Route path='/' element={<PostPage />} />
			<Route path='/user/:userId' element={<UserPage />}></Route>
			<Route path='/users' element={<UserPage />} />
			{/* <Route path='/posts' element={<PostPage />} /> */}
			<Route path='*' element={<div>404 Not Found</div>}></Route>
		</Routes>
		//</div>
	);
}

export default App;
