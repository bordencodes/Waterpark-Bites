import axios from 'axios'
import { useEffect } from 'react'
import {useState} from 'react'

const AllMenuItems=({_id})=>{
  const [remove, removeItem] = useState('')
  const [orders, setOrders] = useState([])
  const initialState = {item: '',description: '', cost:''}
  const [formState, setFormState] = useState(initialState)
  const [itemAdded, toggleItemAdded] = useState(false)

useEffect(() => {
    const getOrder = async () => {
      try {
        let res = await axios.get('http://localhost:3001/allItems')
        console.log(res.data)
        setOrders(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getOrder()
  }, [itemAdded]) 

    const handleClick = async (e, objId) => {
      e.preventDefault()
      await axios.delete(`http://localhost:3001/allItems/${_id}`, {_id: objId})
    }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/order', formState)
    setFormState(initialState)
    toggleItemAdded(!itemAdded)
  }
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }
  const handleItemChange = (e) => {
    removeItem({ ...remove, [e.target.id]: e.target.value })
  }
  return(
    <div>
    <h1>All Menu Items</h1>
    {orders?.map((order) => (
      <div key={order._id}>
        <h2>{order.item}</h2>
        <h3>{order.description}</h3>
        <h4>{order.cost}</h4>
        <button onClick={(e) => handleClick(e, order._id)}>-</button>
      </div>
    ))} 
    <form className="form" 
    onSubmit={handleSubmit} 
    >
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
      <button type="submit">Add a customized item!</button>
    </form> 
    </div>
  )
}
export default AllMenuItems
