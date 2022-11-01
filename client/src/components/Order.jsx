import {useEffect, useState} from 'react'
import axios from 'axios'

const Order = ()=> {
  const [list, setList] = useState([])


  return(
    <div>
    <h1>Your Order</h1>
    {list?.map((list) => (
      <div key={list._id}>
        <h2>{list.item}</h2>
        <h3>{list.description}</h3>
        <h4>{list.cost}</h4>
      </div>
    ))}
    <form className="form" 
    /* onSubmit={handleSubmit} */
    >
      <label htmlFor="item">Item:</label>
      <input
        className="form-text"
        /* onChange={handleChange} */
        type="text"
        id="item"
        /* value={formState.item} */
      />
      <label htmlFor="description">Description:</label>
      <textarea
        className="form-text"
      /*  onChange={handleChange}
        value={formState.description} */
        id="description"
        cols="30"
        rows="10"
      ></textarea>
      <label htmlFor="cost">Cost:$</label>
      <input
        className="form-text"
        /* onChange={handleChange} */
        type="integer"
        id="cost"
        /* value={formState.cost} */
      />
      <label htmlFor="category">Category:</label>
      <input
        className="form-text"
        /* onChange={handleChange} */
        type="text"
        id="category"
       /*  value={formState.category} */
      />
      <button type="submit">Add My Drink!</button>
    </form> 
    </div>
  )
}
export default Order