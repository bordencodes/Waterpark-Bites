import {Link} from 'react-router-dom'

const Nav = () => {
  return  <div className='navLinks'>
      <div></div>
      <div className='mainTitle'>Waterpark-Bites</div>
      <Link to ="/menu" className='smallNavLinks'>Menu </Link>
      <Link to ="/allMenu" className='smallNavLinks'>All Items </Link>
    </div>
}

export default Nav
