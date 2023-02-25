import "./TopBar.css"
import { Link } from "react-router-dom"

const TopBar = ({ resetFunction }) => {
  return (
    <div className="top-bar">
      <Link to={"/"}>
        <button>Return</button>
      </Link>
      <button onClick={resetFunction}>Reset</button>
    </div>
  )
}

export default TopBar
