import { toast } from "react-hot-toast";
import {MdDelete} from "react-icons/md"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";



const CartItem = ({item,itemIndex}) => {

const dispatch=useDispatch();
function  removeFromCart(){
  dispatch(remove(item.id));
  toast.error("item removed frome cart");
}

  return(
     <div className="flex  gap-x-8 border-b-2 border-gray-400  h-64  justify-between  p-2 cart-item  ">
       <div className=" w-[180px] ml-4 ">
         <img src={item.image} alt="not found" 
         className="img  h-full w-full"/>
       </div>
       <div className=" w-[50%] flex flex-col justify-evenly discription">
         <h1 className=" text-gray-700 font-semibold text-lg mb-3">{item.title}</h1>
         <h1 className="mb-3">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
         <div className="flex justify-between">
           <p className=" font-semibold text-green-600 text-xl">${item.price}</p>
           <div className="ml-3 bg-red-300 flex justify-center cursor-pointer items-center rounded-full h-8 w-8">
             <MdDelete onClick={removeFromCart} />
           </div>
         </div>

       </div>
     </div>
     );
};

export default CartItem;
