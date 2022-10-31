import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Menu from './pages/Menu'
import AllMenuItems from './pages/AllMenuItems'

const App = () => {
  return (
    <div>
      <Header />
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
