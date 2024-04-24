import "./App.css";


import Carousel from "./Components/BodyParts/Carousel";
import Footer from "./Components/Footer/Footer";
import Body from "./Components/Body/Body";
import Pic1 from "./Components/Asset/$_57.jpeg";
import Pic2 from "./Components/Asset/s-l1600.jpg"
import Header, { Lastnav } from "./Components/Header/Header";
import Home from "./Components/Navbarbottom/Home";


function Mainpage() {

    // window.location.reload()


  const Slides = [
    Pic2,
    Pic1,
  
  ];
  return (
   <div>
     <Header/> 
  <Lastnav/>
      <div className="w-[60%] m-auto p-1  ">
        <Carousel slides={Slides} />
      </div> 
       <Body/>
    <Home/>
       
        <Footer/>
          
    </div> 
  );
}

export default Mainpage;
