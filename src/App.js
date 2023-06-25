import './App.css'
import './Responsive.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './component/HomePage';
const App = ()=>{
  return(
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;