import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Food =()=>{

  const [list, setList] = useState([])

  let navigate = useNavigate()

  const getFood = async()=>{
  let res = await axios.get ('http://localhost:3001/food')
  console.log(res.data)
  setList(res.data)
  }
  
  useEffect(() => {
    getFood()
  }, [])

  return (<div>
    {list?.map((list) => (
      <div key={list._id}>
      <h2>Item:{list.item}</h2>
      <h2>Description:{list.description}</h2>
      <h2>Cost:{list.cost}</h2>
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
      <button type="submit">Add My Meal!</button>
    </form> */}
</div>)
}

export default Food

