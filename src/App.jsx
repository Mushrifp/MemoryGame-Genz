import Errr from './pages/Errr'
import Game from './pages/Game'
import Home from './pages/Home'
import {Route,Routes} from 'react-router-dom'


function App() {


  return (
    <>
      <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/game/:vibe' element={<Game/>} />
            <Route path='/*' element={<Errr/>} />

      </Routes>
    </>
  )
}

export default App
