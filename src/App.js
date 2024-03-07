import React from 'react'
import "./App.css"
import Mainpage from './Mainpage'
import { Routes,Route } from 'react-router-dom'
import Signup from './Components/NavbarTop/Signup'
import Wishlist from './Components/NavbarTop/Wishlist'
import Addtocart from './Components/NavbarTop/Addtocart'
import Home from './Components/Navbarbottom/Home'
import Electronics from './Components/Navbarbottom/Electronics'
import Motors from './Components/Navbarbottom/Motors'
import Fashion from './Components/Navbarbottom/Fashion'
import Sports from './Components/Navbarbottom/Sports'
import HealthandBeauty from './Components/Navbarbottom/HealthandBeauty'
import IndustrialEquip from './Components/Navbarbottom/IndustrialEquip'
import Homeandgarden from './Components/Navbarbottom/Homeandgarden'


const App = () => {
  return (
    <div>
        
        <Routes>
            <Route path='/' element={<Mainpage/>}/>
         <Route path="/signup" element={<Signup />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/addtocart" element={<Addtocart />} /> 


   
        <Route path="/" element={<Home/>}/>
        <Route path="/electronics" element={<Electronics/>}/>
        <Route path="/motors" element={<Motors/>}/>
        <Route path="/fashion" element={<Fashion/>}/>
        <Route path="/sports" element={<Sports/>}/>
        <Route path="/healthandbeauty" element={<HealthandBeauty/>}/>
        <Route path="/industrialequipment" element={<IndustrialEquip/>}/>
        <Route path="/homeandgarden" element={<Homeandgarden/>}/>
     

 

        </Routes>
        

    </div>
  )
}

export default App