import "./App.css"
import { Route, Routes } from "react-router-dom"
import Menu from "./components/menu/Menu"
import Timer from "./components/timer/Timer"
import Counter from "./components/counter/Counter"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  )
}

export default App
