import axios from 'axios'
import { useEffect } from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Drinks =()=>{
  /* const initialState={
    item:'',
    description:'',
    cost:'',
    category:''
  } */

  let navigate = useNavigate
  const [list, setList] = useState([])

  const getDrinks= async()=>{
  let res = await axios.get ('http://localhost:3001/drink')
  console.log(res.data)
  setList(res.data)
  }

  useEffect(() => {
    getDrinks()
  },[])

/*  const handleChange= (event)=>{
    setFormState({...formState, [event.target.id]: event.target.value})
  } */

  return (<div>
    {list?.map((list) => (
      <div key={list._id}>
      <h2>Item:{list.item}</h2>
  <h2>Description:{list.description}</h2>
  <h2>Cost:${list.cost}</h2>
      </div>
    ))}
 
</div> )

}

export default Drinks
