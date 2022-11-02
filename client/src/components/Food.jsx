import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Food =()=>{

  const [list, setList] = useState([])

  let navigate = useNavigate()

  const getFood = async()=>{
  let res = await axios.get ('http://localhost:3001/food')
  console.log(res.data)
  setList(res.data)
  }
  
  useEffect(() => {
    getFood()
  }, [])

  return (<div className="category-page">
    {list?.map((list) => (
      <div key={list._id}>
      <section className="item-cost">
      <h2>{list.item}</h2>
      <h2>Price: ${list.cost}</h2>
      </section>
      <p className="item-description">{list.description}</p>
      </div>
    ))}
 
</div> )
}

export default Food

