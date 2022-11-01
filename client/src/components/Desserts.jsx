import axios from 'axios'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Desserts =()=>{
  const [list, setList]=useState([])
/* hello */
  let navigate = useNavigate()
  const getDesserts= async()=>{
  let res= await axios.get ('http://localhost:3001/dessert')
  console.log(res.data)
  setList(res.data)
  }

  useEffect(()=>{
    getDesserts()
  }, [])

  return <div>
    {list?.map((list)=>(
    <div key={list._id}>
    <h2>Item:{list.item}</h2>
    <h2>Description:{list.description}</h2>
    <h2>Cost:{list.cost}</h2>
    </div>
    ))}
    
  </div>
}

export default Desserts