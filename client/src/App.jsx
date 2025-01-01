import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import { Home } from "./Pages/Home";
import { Add } from './Pages/Add';
import { Update } from './Pages/Update';


function App() {
 

  return (

    <Router>
        <Routes>
            <Route  path='/' element={<Home/>} />
            <Route  path='/add' element={<Add/>} />
            <Route  path='/update' element={<Update/>} />
        </Routes>
    </Router>
  )
}

export default App
