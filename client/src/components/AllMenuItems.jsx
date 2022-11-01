import axios from 'axios'
import { useEffect } from 'react'
import {useState} from 'react'

const AllMenuItems=()=>{

  const [formState, setFormState]=useState([])

  const getAllItems = async () => {
    let res = await axios.get('http://localhost:3001/allItems')
    console.log(res.data)
    setFormState(res.data)
  }

  useEffect(() => {
    getAllItems()
  },[])


  return(
  <div>
    <h1>All Menu Items</h1>
    {formState?.map((form) =>(
      <div key={form._id}>
        <h2>{form.item}</h2>
      </div>
    ))}
  </div>
  )
}

export default AllMenuItems
