import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    
    <div className='main-footer'> 
        
    

    <div  className="flex justify-between  ">
     
      
        <div className="one">
          <ul>
            <li>
              <h1>Buy</h1>
            </li>
            <li>Registration</li>
            <li>ebay Money Back Guarentee</li>
            <li>Bidding & buying help</li>
            <li>Stores</li>
          </ul>
        </div>
        <div className="two">
          <ul>
            <li>
              <h1>sell</h1>
            </li>
            <li>Start selling</li>
            <li>learn to sell</li>
            <li>Affiliates</li>
          </ul>
          <br/>
        
          <ul>
            <li><h1>Tools &apps</h1></li>
            <li>Developers</li>
            <li>Security center</li>
            <li>site map</li>
          </ul>
        </div>
        <div className="three">
          <ul>
            <li>
              <h1>Stay connected</h1>
            </li>
            <li>eBay's Blogs</li>
            <li>facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="four">
          <ul>
            <li>
              <h1>About eBay</h1>
            </li>
            <li>Company info</li>
            <li>News</li>
            <li>Investors</li>
            <li>Careers</li>
            <li>Govt relations</li>
            <li>Policies</li>
          </ul>
        </div>
        <div className='five'>
            <ul>
                <li><h1>Help &Contact</h1></li>
                <li>Seller Information center</li>
                <li>Contact us</li>
                
            </ul>
            <br/>
            <ul>
                <li><h1>community</h1></li>
                <li>Announcements</li>
                <li>Discussion boards</li>
                <li>eBay giving works</li>
            </ul>
        </div>
     
      
   
    </div>
    <div className='mt-40 ml-20'>
        <p>Copyright © 1995-2024 eBay Inc. All Rights Reserved. Accessibility, User Agreement, Privacy, Payments Terms of Use, Cookies, CA Privacy Notice, Your Privacy Choices and AdChoice</p>
    </div>
 
    </div>
  )
}

export default Footer