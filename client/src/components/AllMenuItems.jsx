import axios from 'axios'
import { useEffect } from 'react'
import {useState} from 'react'

const AllMenuItems=({_id})=>{
  const [orders, setOrders] = useState([])
  const initialState = {item: '',description: '', cost:''}
  const [formState, setFormState] = useState(initialState)
  const [itemAdded, toggleItemAdded] = useState(false)

    const getOrder = async () => {
      try {
        let res = await axios.get('/allItems')
        console.log(res.data)
        setOrders(res.data)
      } catch (err) {
        console.log(err)
      }
    }

    useEffect(() => {
      getOrder()
  }, [itemAdded]) 

    const handleClick = async (e, ObjectId) => {
      e.preventDefault()
      await axios.delete(`/allItems/${ObjectId}`)
      getOrder()
    }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/order', formState)
    setFormState(initialState)
    toggleItemAdded(!itemAdded)
  }
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }
  return(
    <div className='Items'>
    <h1>All Menu Items</h1>
    {orders?.map((order) => (
      <div key={order._id}>
        <h2>{order.item}</h2>
        <h3 className='description'>{order.description}</h3>
        <div></div>
        <h4 className='price'>{order.cost}</h4>
        <button onClick={(e) => handleClick(e, order._id)} className='delete'>-</button>
      </div>
    ))} 
    <form className="form" 
    onSubmit={handleSubmit} 
    >
      <label htmlFor="item"><div className='item'>Item:</div></label>
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
      <label htmlFor="cost">Price:$</label>
      <input
        className="form-text"
        onChange={handleChange} 
        type="integer"
        id="cost"
        value={formState.cost} 
      />
      <button type="submit">Add item!</button>
    </form> 
    </div>
  )
}
export default AllMenuItems
