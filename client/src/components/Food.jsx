import axios from 'axios'

const Food =()=>{

   // const getFood= async()=>{
  // let res= await axios.get ('http://localhost:3001/')
  // }
  
  return <div>
  <h2>Item:{Item.item}</h2>
  <h2>Description:{Item.description}</h2>
  <h2>Cost:{Item.cost}</h2>
  <h4>Category{Item.category}</h4>
</div>
}

export default Food


//axios call for food