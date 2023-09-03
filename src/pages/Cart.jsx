import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem"
import { useEffect, useState } from "react";


const Cart = () => {

   const {cart}=useSelector((state)=>state);
   const[totalAmount,setTotalAmount]=useState(0);
   useEffect(()=>{
     setTotalAmount(cart.reduce((acc,crr)=>acc+crr.price,0))
   },[cart])

  return (
    <div>
     {
      cart.length > 0 ? (
        <div className="flex mt-8   max-w-6xl p-2 mx-auto space-y-10 space-x-5 gap-x-24 cart ">
        <div className="w-[60%]  item">
        {
          cart.map((item,index)=>(
            <CartItem  key={item.id} item={item} itemIndex={index} />
          ))
        }
        
        </div>
         <div className="w-[30%]  h-[300px] flex flex-col justify-between item-cart">
         <div>
         <p className="text-xl font-semibold text-green-600 uppercase">your cart</p>
         <h1 className="text-5xl font-semibold text-green-600 mb-3">Summery</h1>
         <p><span className="font-semibold text-xl">Total item : {cart.length}</span></p>
         </div>
         <div>
         <p className="font-semibold text-xl mb-3">Total amount : ${totalAmount}</p>
         <div> <button className="w-full bg-green-600 text-white p-2 font-semibold mx-auto rounded-lg">Check Out</button>
         </div>
        
         </div>
         
         </div>

        </div>
        ):(
        <div className="w-screen  h-screen flex-col flex justify-center items-center">
        <h1 className="text-green-600 mb-2 font-semibold">Cart Empty</h1>
        <Link to="/"><button className="bg-green-600 p-2 rounded text-xl text-white w-36">Shop Now</button></Link>
        </div>
      )
     }

    </div>
  );
};

export default Cart;
