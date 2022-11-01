import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="landing">
      <h3>Welcome to Waterpark-Bites!</h3>
      <p>
        Waterpark-Bites is your one-stop shop concession stand for all waterpark
        food. Take a break from your fun-filled day to enjoy some grub!
      </p>
      <Link to="/">Home</Link>
    </div>
  )
}
export default Landing

//link to homepage
