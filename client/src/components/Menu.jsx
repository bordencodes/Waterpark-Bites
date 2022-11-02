import {Link} from 'react-router-dom'

const Menu =()=>{

  return(
    <div className='mainMenu'>
        <img
        className="waterpark-gif"
        src="https://media.giphy.com/media/bsfUpZfjw8pBr2QKUg/giphy.gif"
        alt="burger gif"
      />
      <h2 className="menuList"> <Link to ="/drink">Drinks</Link></h2>
      <h2 className="menuList"> <Link to="/food">Food </Link></h2>
      <h2 className="menuList"> <Link to="/dessert">Desserts </Link></h2>
    </div>
  )
}

export default Menu