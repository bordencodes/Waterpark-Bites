import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Menu from './components/Menu'
import Food from './components/Food'
import Drinks from './components/Drinks'
import Desserts from './components/Desserts'
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
          <Route path="/food" element={<Food />} />
          <Route path="/drink" element={<Drinks />} />
          <Route path="/dessert" element={<Desserts />} />
          <Route path="/allMenu" element={<AllMenuItems />} />
          <Route path="/allItems/:id" element={<AllMenuItems />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
