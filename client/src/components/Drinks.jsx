import axios from 'axios'
import { useEffect } from 'react'
import {useState} from 'react'

const Drinks =()=>{
  /* const initialState={
    item:'',
    description:'',
    cost:'',
    category:''
  } */

  const [list, setList] = useState([])

  /* const [formState, setFormState]= useState(initialState) */

  const handleSubmit= async (event)=>{
    event.preventDefault()
    //need more work here
  }


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
  <h4>Category{list.category}</h4>
  <h2>Add a drink to the menu!</h2>
      </div>
    ))}
  {/* <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="item">Item:</label>
      <input
        className="form-text"
        onChange={handleChange}
        type="text"
        id="item"
        value={formState.item}
      />
      <label htmlFor="description">Description:</label>
      <textarea
        className="form-text"
        onChange={handleChange}
        value={formState.description}
        id="description"
        cols="30"
        rows="10"
      ></textarea>
      <label htmlFor="cost">Cost:$</label>
      <input
        className="form-text"
        onChange={handleChange}
        type="integer"
        id="cost"
        value={formState.cost}
      />
      <label htmlFor="category">Category:</label>
      <input
        className="form-text"
        onChange={handleChange}
        type="text"
        id="category"
        value={formState.category}
      />
      <button type="submit">Add My Drink!</button>
    </form> */}
</div> )

}

export default Drinks
