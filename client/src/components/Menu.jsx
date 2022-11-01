import {Link} from 'react-router-dom'

const Menu =()=>{

  return(
    <div>
      <h2 className="drinksMain"> <Link to ="/drink">Drinks</Link></h2>
      <h2 className="foodMain"> <Link to="/food">Food </Link></h2>
      <h2 className="dessertsMain"> <Link to="/dessert">Desserts </Link></h2>
    </div>
  )
}

export default Menu