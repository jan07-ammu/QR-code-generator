
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Loading from './components/Loading'
import Design from './components/Design'
function App() {
  return (
    <>
       <BrowserRouter>
         <Routes>
          <Route path="/" element={<Design/>}/>
  
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
