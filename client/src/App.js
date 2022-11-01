import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Menu from './components/Menu'
import AllMenuItems from './components/AllMenuItems'
import Nav from './components/Nav'

const App = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/allMenu" element={<AllMenuItems />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
