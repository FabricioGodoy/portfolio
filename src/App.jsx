import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from "./components/home"
import { NavBar } from './components/navbar/navBar'


function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
