import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserPage from './pages/userPage';
import PostPage from './pages/postPage';
import TodoPage from './pages/todoPage';
import AlbumPage from './pages/albumPage';
import PhotoPage from './pages/photoPage';
function App() {
	return (
		<Routes>
			<Route path='/' element={<PostPage />} />
			<Route path='/user/:userId'>
				<Route path='' element={<UserPage />} />
				<Route path='todos' element={<TodoPage />} />
				<Route path='albums'>
					<Route path='' element={<AlbumPage />}></Route>
					<Route path=':albumId/photos' element={<PhotoPage />} />
				</Route>
			</Route>
			<Route path='*' element={<div>404 Not Found</div>}></Route>
		</Routes>
	);
}

export default App;
