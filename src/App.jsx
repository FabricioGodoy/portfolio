import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { NavBar } from './components/navbar/navBar'
import { HomePage } from './components/homePage'

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
