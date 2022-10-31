import Drinks from './Drinks'
import Food from './Food'
import Desserts from './Desserts'

const Menu =(props)=>{
  return(
    <div>
      <Drinks/>
      <Food/>
      <Desserts/>
    </div>
  )
}

export default Menu

//render food, drinks, desserts