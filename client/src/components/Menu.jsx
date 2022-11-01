import Drinks from './Drinks'
import Food from './Food'
import Desserts from './Desserts'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Menu =()=>{
  let navigate= useNavigate()

  // const [menuState, setMenuState]=useState()

  // const apiCall= async ()=>{
  //   const response = await axios.get('http://localhost:3001/menu')
  //   setMenuState(response.data)
  // }

  // useEffect (()=>{
  //   apiCall()
  // }, [])

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