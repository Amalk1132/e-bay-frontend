import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

import Allfooter from '../Footer/Allfooter'


const Userlayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        {/* <Footer/> */}
        <Allfooter/>

    </div>
  )
}

export default Userlayout