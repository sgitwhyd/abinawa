import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
const Home = lazy(() => import('./pages/Home'));
const Detail = lazy(() => import('./pages/Detail'));

function App() {
	return (
		<Suspense fallback={<h1>Loading....</h1>}>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='detail/:id' element={<Detail />} />
			</Routes>
		</Suspense>
	);
}

export default App;
