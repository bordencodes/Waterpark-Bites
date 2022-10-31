import axios from 'axios'
import {useState} from 'react'

const AllMenuItems=()=>{

  const (formState, setFormState)=useState()

const deleteItem= async ()=>{
let res= await axios.delete()
// need a function here to render new list (after item deleted)
}

  return
  <div>
    <button onClick={deleteItem}>Delete Item</button>
  </div>
}

export default AllMenuItems
