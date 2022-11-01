import axios from 'axios'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Drinks =()=>{
  const initialState={
    item:'',
    description:'',
    cost:'',
    category:''
  }

  const [formState, setFormState]= useState(initialState)

  const handleSubmit= async (event)=>{
    event.preventDefault()
    //need more work here
  }


  // const getDrinks= async()=>{
  // let res= await axios.get ('http://localhost:3001/')
  // }

  const handleChange= (event)=>{
    setFormState({...formState, [event.target.id]: event.target.value})
  }

  return <div>
  <h2>Item:{Item.item}</h2>
  <h2>Description:{Item.description}</h2>
  <h2>Cost:${Item.cost}</h2>
  <h4>Category{Item.category}</h4>
  <h2>Add a drink to the menu!</h2>
  <form className="form" onSubmit={handleSubmit}>
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
    </form>
</div>
}

export default Drinks
