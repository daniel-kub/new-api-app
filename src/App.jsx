import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Emoji } from './pages/emoji'
import { Menu } from './pages/menu'
import { Cytaty } from './pages/cytaty'
import { Navbar } from './components/Navbar'

function App() {
  return <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/emoji" element={<Emoji/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<h1>404 Not Found</  h1>} />
      </Routes>
    </Router>
  </>
}

export default App
