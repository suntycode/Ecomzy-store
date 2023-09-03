import { useEffect, useState } from "react";
import { Spinner } from "../components/Spinner";
import ProductCart from "../components/ProductCart"


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const[loading,setLoading]=useState(false);
  const[posts,setPosts]=useState([]);

  async function callApi(){
    setLoading(true);
    try{
     const res=  await fetch(API_URL);
     const data= await res.json();
     console.log(data);
     setPosts(data);
    }
    catch(error){
      console.log("error in api");
      setPosts([]);
    }
    setLoading(false)
  }

   useEffect(()=>{
    callApi()
   },[])

  return (<div>
    {
      loading ? <Spinner   /> :
      posts.length > 0 ? (
       
        <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] sm:px-11">
        {
          posts.map((post)=>
            
           (<ProductCart  key={post.id} post={post}   />)
          )
        }
        </div>
      ):
      (<div className="flex justify-center items-center w-screen h-screen">
      <p className="text-xl font-semibold text-blue-600">No Data Found</p></div>)
    }
    
    </div>)
};

export default Home;
