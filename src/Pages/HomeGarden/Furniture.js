import "./Furniture.css"
import { useContext } from 'react'
import { myContext } from '../../App'
import { Link } from 'react-router-dom'


const Furniture = () => {
    const {data}=useContext(myContext)
    // const [cart,setCart]=useState([])

    // const addcart=()=>{
    //     setCart([...cart,data])

    // }
    // const removeCart=()=>{
    //     setCart(cart.filter((datas)=>datas.id!==data.id))

    // }
  return (
    <div className='main-fur'>
            {
                data.filter((item)=>item.Subcategory==="furniture")
                .map((item,index)=>{
                    return (
                        <Link to={`/displauprod/${item._id}`}> <div key={index } className='sub-fur'>
                            <h1>{item.Title}</h1>
                            <h1>{item.Description}</h1>
                            <h1>{item.Category}</h1>
                            <h1>{item.Subcategory}</h1>
                            <img src={item.Image} alt='furniture'/>
                            <h1>{item.Price}</h1>
                            {/* {
                                cart.includes(data)?(<button className='btn-remove' onClick={removeCart}>removeCart</button>):
                                ( <button className="btn-addcar" onClick={addcart}>Add to cart</button>)
                            } */}

                           
                          <button>add to cart</button>
                        </div></Link>
                    )
                })
            }
            </div>
  )
}

export default Furniture