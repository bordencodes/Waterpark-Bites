import {Link} from 'react-router-dom'

const Nav = () => {
  return  <div className='navLinks'>
      <div></div>
      <div className='mainTitle'>Waterpark-Bites</div>
      <Link to ="/menu" className='navLinks'>Menu </Link>
      <Link to ="/allMenu" className='navLinks'>All Items </Link>
    </div>
}

export default Nav
