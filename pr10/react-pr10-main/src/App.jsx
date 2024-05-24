import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Fetch from './Fetch'
import Axios from './Axios'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Fetch />} />
        <Route path='/axios' element={<Axios />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
