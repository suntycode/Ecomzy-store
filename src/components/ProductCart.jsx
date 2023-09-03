import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { remove,add } from "../redux/Slices/CartSlice";

const ProductCart = ({post}) => {

   const{cart}=useSelector((state)=>state);
   const dispatch=useDispatch();
   function addCart(){
    dispatch(add(post));
    toast.success("item added to cart")
   }
   

   function removeCart(){
    dispatch(remove(post.id));
    toast.error("remove from cart");
   }



  return (
   <div className="flex flex-col items-center justify-between 
   hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
     <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0,10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={post.image}  alt="not found"  className="h-full w-full " />
      </div>
      <div className="flex justify-between gap-10 items-center w-full mt-5 btn">
        <div>
          <p className="text-green-600 font-semibold">
            ${post.price}
           </p>
         </div>
         <buttton className="">
           {
             cart.some((p)=>p.id===post.id) ? 
              (<button onClick={removeCart}  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
              text-[12px] p-1 px-3 uppercase 
              hover:bg-gray-700
              hover:text-white transition duration-300 ease-in" >remove item</button>): 
              (<button  onClick={addCart}  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
              text-[12px] p-1 px-3 uppercase 
              hover:bg-gray-700
              hover:text-white transition duration-300 ease-in" >add to cart</button>)
            }
         </buttton>
      </div>
  
  </div>)
};

export default ProductCart;
