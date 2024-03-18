import {useState} from "react"
import Header from "./Components/Header"
import { Routes,Route } from 'react-router-dom';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./Components/Home"
import Footer from "./Components/Footer2";
import Resource1 from "./Components/Resources/Resource1";
import Jobs from "./Components/Jobs/Jobs";
import Inter from "./Components/Intern/Inter";



function App() {
  const[isLoggedIn,setIsLoggedIn]=useState(false);

  return (
    <>
      <div class="bg-gradient-to-r from-stone-950 to-gray-900 overflow-x-hidden"  >
        <Header/>
       
        <Routes>
        <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login  setIsLoggedIn={setIsLoggedIn}/>} />
     <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}  />
     <Route path="/res" element={<Resource1/>}/>
     <Route path="/jobs" element={<Jobs/>} />
     <Route path="/int" element={<Inter/>}/>
             </Routes>

             <Footer/>

        </div>
    </>
  )
}

export default App
