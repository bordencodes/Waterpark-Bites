import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="landing">
      <h3 className="landing-title">Welcome to Waterpark-Bites!</h3>
      <img
        className="waterpark-gif"
        src="https://media.giphy.com/media/xT39CUZqBfDaovFxMQ/giphy.gif"
        alt="waterpark gif"
      />
      <p className="landing-text">
        Take a break from your fun-filled day to enjoy some grub!
      </p>
      <span className="landing-menu">
        <Link to="/menu">Menu</Link>
      </span>
    </div>
  )
}
export default Landing
