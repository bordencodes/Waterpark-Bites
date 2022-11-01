import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Menu from './pages/Menu'
import AllMenuItems from './pages/AllMenuItems'
import Nav from './components/Nav'

const App = () => {
  return (
    <div>
      <header>
        <Nav/>
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
