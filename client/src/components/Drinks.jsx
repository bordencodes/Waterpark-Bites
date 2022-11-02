import axios from 'axios'
import { useEffect } from 'react'
import {useState} from 'react'

const Drinks =()=>{
  const [list, setList] = useState([])

  const getDrinks= async()=>{
  let res = await axios.get ('/drink')
  console.log(res.data)
  setList(res.data)
  }

  useEffect(() => {
    getDrinks()
  },[])

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

export default Drinks
