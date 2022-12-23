import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Loading from './components/loading/loading.component';

const Home = lazy(() => import('./pages/Home'));
const Detail = lazy(() => import('./pages/Detail'));

function App() {
	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='*' element={<h1>test</h1>} />
				<Route path='/detail/:id' element={<Detail />} />
			</Routes>
		</Suspense>
	);
}

export default App;
