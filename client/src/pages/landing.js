import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="landing">
      <h3 className="landing-title">Welcome to Waterpark-Bites!</h3>
      <p className="landing-text">
        Take a break from your fun-filled day to enjoy some grub!
      </p>
      <Link to="/menu">Menu</Link>
    </div>
  )
}
export default Landing
