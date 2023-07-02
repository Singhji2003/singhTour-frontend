import './App.css'
import { useEffect, useState } from "react";
import './Responsive.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './component/HomePage';
import Places from './component/Places';
import EachPlace from './component/EachPlace';
import ScrollToTop from './component/ScrollToTop';
import ContactUs from './component/ContactUs';
const App = ()=>{
  const [data, setData]  = useState({
    title : 'arpan',
  })
  const getdata = (data)=>{
    setData(data);
  } 
  return(
    <>
    <BrowserRouter>
      <ScrollToTop/>
     <Routes>
       <Route path="/" element={<HomePage />}/>
      <Route exact path='/place' element={<Places data = {getdata}/>}/>
      <Route exact path='/contact' element={<ContactUs/>}/>
    <Route exact path={"/place/"+data.title} element= {<EachPlace data = {data}/>}/>
     </Routes>
   </BrowserRouter>
   </>
  )
}
export default App;