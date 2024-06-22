import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'

import { NavBar } from './components/NavBar.jsx/Index'
import { Detail } from './pages/Detail/Detail'

function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/detail" element={<Detail/>} />
			</Routes>
		</Router>
	)
}

export default App
