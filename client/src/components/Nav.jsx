import {Link} from 'react-router-dom'

const Nav =()=>{
  return <nav className="nav">
    <h3>
      Waterpark-Bites
      <Link to ="/menu">Menu</Link>
      <Link to ="/allMenu">All Menu Items</Link>
    </h3>
  </nav>
}

export default Nav
