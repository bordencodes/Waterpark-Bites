import axios from 'axios'
import { useState, useEffect } from 'react'


const Food =()=>{

  const [list, setList] = useState([])

  const getFood = async()=>{
  let res = await axios.get ('/food')
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

