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
