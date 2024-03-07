import React, { useState } from 'react'


const products=[
    {id:1,name:"laptop",brand:"Dell",Qty:1},
    {id:2,name:"laptop",brand:"Hp",Qty:1},
    {id:3,name:"laptop",brand:"Lenovo",Qty:1},
]
const Keys = () => {
  const [items,setitems]=useState(products);

  const changeqty=(id)=>{
  const newitem=  items.map((data)=>
    data.id===id?{...data,Qty:data.Qty+1}:data

    );
    setitems(newitem);

   

  }
   
  return (
    <div>
        {items.map((item)=>(
            <div className='bg-success w-12' key={item.id}>
                <h1>{item.name}</h1>
                <h1>brand:{item.brand}</h1>
                <h1>qty:{item.Qty}</h1>
                <button onClick={()=>changeqty(item.id)}>+</button>
                
                </div>
        ))}
    </div>
   
  )
}

export default Keys