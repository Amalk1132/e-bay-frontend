import React, { useState } from 'react'
import "./App.css"
import Mainpage from './Mainpage'
import { Routes,Route } from 'react-router-dom'
import Signup from './Components/NavbarTop/Signup'
import Wishlist from './Components/NavbarTop/Wishlist'
import Addtocart from './Components/NavbarTop/Addtocart'
// import Home from './Components/Navbarbottom/Home'
import Electronics from './Components/Navbarbottom/Electronics'
import Motors from './Components/Navbarbottom/Motors'
import Fashion from './Components/Navbarbottom/Fashion'
import Sports from './Components/Navbarbottom/Sports'
import HealthandBeauty from './Components/Navbarbottom/HealthandBeauty'
import IndustrialEquip from './Components/Navbarbottom/IndustrialEquip'
import Homeandgarden from './Components/Navbarbottom/Homeandgarden'
import Login from './Components/NavbarTop/Login'
import {Toaster} from "react-hot-toast"
import Userlayout from './Components/Layout/Userlayout'
import SmartphandWatches from './Pages/SmartphandWatch'
import ComputersandAcc from './Pages/ComputersandAcc'
import TvandAcc from './Pages/TvandAcc'
import Camera from './Pages/Camera'
import AudioHeadphone from './Pages/AudioHeadphone'
import Apple from './Pages/Brands/Apple'
import Dell from './Pages/Brands/Dell'
import Hp from './Pages/Brands/Hp'
import Lenovo from './Pages/Brands/Lenovo'
import Samsung from './Pages/Brands/Samsung'
import Womencloth from './Pages/Fashion/Womencloth'
import Womenbag from './Pages/Fashion/Womenbag'
import Womenshoe from './Pages/Fashion/Womenshoe'
import Mencloth from './Pages/Fashion/Mencloth'
import Menacc from './Pages/Fashion/Menacc'
import Menshoe from './Pages/Fashion/Menshoe'
import Watches from './Pages/Fashion/Watches'
import Jwelery from './Pages/Fashion/Jwelery'
import Beauty from './Pages/Fashion/Beauty'
import Menglass from './Pages/Fashion/Menglass'
import Womeglass from './Pages/Fashion/Womeglass'
import Outdoorspo from './Pages/Sports/Outdoorspo'
import Fitnessandyoga from './Pages/Sports/Fitnessandyoga'
import Fishing from './Pages/Sports/Fishing'
import Cycle from './Pages/Sports/Cycle'
import Tennis from './Pages/Sports/Tennis'
import BoxingandMartial from './Pages/Sports/BoxingandMartial'
import Golf from './Pages/Sports/Golf'
import Oral from './Pages/Healthandbeau.js/Oral'
import Haircare from './Pages/Healthandbeau.js/Haircare'
import Healthcare from './Pages/Healthandbeau.js/Healthcare'
import Makeup from './Pages/Healthandbeau.js/Makeup'
import Fragnens from './Pages/Healthandbeau.js/Fragnens'
import Skincare from './Pages/Healthandbeau.js/Skincare'
import LightEquipment from './Pages/Industrialequipment/LightEquipment'
import LabandDenta from './Pages/Industrialequipment/LabandDenta'
import OfficeEquipment from './Pages/Industrialequipment/OfficeEquipment'
import Hvac from './Pages/Industrialequipment/Hvac'
import Agricultureequip from './Pages/Industrialequipment/Agricultureequip'
import Printingandgrap from './Pages/Industrialequipment/Printingandgrap'
import Restaurent from './Pages/Industrialequipment/Restaurent'
import Furniture from './Pages/HomeGarden/Furniture'
import Kitchen from './Pages/HomeGarden/Kitchen'
import Homeappli from './Pages/HomeGarden/Homeappli'
import VaccumCleaner from './Pages/HomeGarden/VaccumCleaner'
import HomeImprove from './Pages/HomeGarden/HomeImprove'
import Generator from './Pages/HomeGarden/Generator'
import LawmMowers from './Pages/HomeGarden/LawmMowers'
import PressureWasher from './Pages/HomeGarden/PressureWasher'
import Homedisco from './Pages/HomeGarden/Homedisco'
import Majorappli from './Pages/HomeGarden/Majorappli'
import LightFan from './Pages/HomeGarden/LightFan'
import Window from './Pages/HomeGarden/Window'
import toast from 'react-hot-toast'
import axios from 'axios'
import { createContext,useEffect } from 'react'
import Displyprod from './Pages/Displyprod'


export const myContext = createContext();

const App = () => {
  const [data,setData]=useState([]);


     useEffect(()=>{
        axios.get("http://localhost:8090/user/products")
        .then((res)=>setData(res.data))
        .catch((e)=>{
            toast.error("error")
        })

    },[])
  
  return (
    <div>
      <Toaster/>
      <myContext.Provider value={{
        data,
        setData
      }}>

     

        

        <Routes>
        <Route path="/signup" element={<Signup />} />
         <Route path='/login' element={<Login />}/>
          
        <Route path='/' element={<Mainpage/>}/>

        <Route path='/' element={<Userlayout/>}>
        <Route path='/smartphandwatch' element={<SmartphandWatches/>}/>
        <Route path="/computersandacc" element={<ComputersandAcc/>}/>
        <Route path='/tvandacc' element={<TvandAcc/>}/>
        <Route path='/camera' element={<Camera/>}/>
        <Route path='/audioheadphone' element={<AudioHeadphone/>}/>
        <Route path='/apple' element={<Apple/>}/>
        <Route path='/dell' element={<Dell/>}/>
        <Route path='/hp' element={<Hp/>}/>
        <Route path='/lenovo' element={<Lenovo/>}/>
        <Route path='/samsung' element={<Samsung/>}/>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/addtocart" element={<Addtocart />} /> 
       <Route path="/electronics" element={<Electronics/>}/>
       <Route path='/displayprod/:id' element={<Displyprod/>}/>

        <Route path="/motors" element={<Motors/>}/>

        <Route path="/fashion" element={<Fashion/>}/>
        <Route path='/womencloth'element={<Womencloth/>}/>
        <Route path='/womenbags'element={<Womenbag/>}/>
        <Route path='/womenshoe'element={<Womenshoe/>}/>
        <Route path='/mencloth'element={<Mencloth/>}/>
        <Route path='/menaccessories'element={<Menacc/>}/>
        <Route path='/menshoe'element={<Menshoe/>}/>
        <Route path='/watches'element={<Watches/>}/>
        <Route path='/beauty'element={<Beauty/>}/>
        <Route path='/jwellry'element={<Jwelery/>}/>
        <Route path='/mensunglass'element={<Menglass/>}/>
        <Route path='/womensunglass'element={<Womeglass/>}/>

        <Route path="/sports" element={<Sports/>}/>
        <Route path='/outdoorspo' element={<Outdoorspo/>}/>
        <Route path='/fitnessandyoga' element={<Fitnessandyoga/>}/>
        <Route path='/fishing' element={<Fishing/>}/>
        <Route path='/cycle' element={<Cycle/>}/>
        <Route path='/tennis' element={<Tennis/>}/>
        <Route path='/boxingandmartialarts' element={<BoxingandMartial/>}/>
        <Route path='/golf' element={<Golf/>}/>
        
        <Route path="/healthandbeauty" element={<HealthandBeauty/>}/>
        <Route path="/oralcare" element={<Oral/>}/>
        <Route path="/haircare" element={<Haircare/>}/>
        <Route path="/healthCare" element={<Healthcare/>}/>
        <Route path="/makeup" element={<Makeup/>}/>
        <Route path="/fragrances" element={<Fragnens/>}/>
        <Route path="/skincare" element={<Skincare/>}/>

        <Route path="/industrialequipment" element={<IndustrialEquip/>}/>
        <Route path="/lightequipment" element={<LightEquipment/>}/>
        <Route path="/labanddenta" element={<LabandDenta/>}/>
        <Route path="/officeequipment" element={<OfficeEquipment/>}/>
        <Route path="/hvac" element={<Hvac/>}/>
        <Route path="/agricultureequip" element={<Agricultureequip/>}/>
        <Route path="/printingandgrap" element={<Printingandgrap/>}/>
        <Route path="/restaurent" element={<Restaurent/>}/>

        <Route path="/homeandgarden" element={<Homeandgarden/>}/>
        <Route path='homediscov' element={<Homedisco/>}/>
        <Route path="/furniture" element={<Furniture/>}/>
        <Route path="/light" element={<LightFan/>}/>
        <Route path="/kitchen" element={<Kitchen/>}/>
        <Route path="/homeappli" element={<Homeappli/>}/>
        <Route path="/vaccumcleaner" element={<VaccumCleaner/>}/>
        <Route path="/homeimpro" element={<HomeImprove/>}/>
        <Route path="/majorappli" element={<Majorappli/>}/>
        <Route path="/generator" element={<Generator/>}/>
        <Route path="/lawnmowers" element={<LawmMowers/>}/>
        <Route path="/presurewasher" element={<PressureWasher/>}/>
        <Route path="/window" element={<Window/>}/>
     
        </Route>

 

        </Routes>
        </myContext.Provider>
        

    </div>
  )
}

export default App