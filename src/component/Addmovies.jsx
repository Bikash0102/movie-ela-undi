import React from 'react'
import Header from 'react-loader-spinner';
import { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { movie } from '../firebase/firebase';
import { TailSpin } from 'react-loader-spinner';
import swal from 'sweetalert';


const Addmoives = () => {
 const[form,setform]=useState({
    title:"",
    year:"",
    description:"",
    image:"",
    rated:0,
    rating:0,

 });
 const [loading,setLoading]=useState(false);
 
const addMovie=async()=>{
  setLoading(true);
await addDoc(movie,form);
  swal({
    title:"SUCCESSFULLY ADDED",
    icon: "success",
    buttons:false,
    timer:3000,
   
  }
  
 )
 setform({
  title:"",
  year:"",
  description:"",
  image:"",


 })
 setLoading(false);

  
}


  return (
    <div className='addmovie'>
        <section class="text-gray-600 body-font relative mt-9">
  <div class="container px-5 py-8 mx-auto ">
    <div class="flex flex-col text-center w-full mb-4">
      <h1 class="sm:text-3xl text-xl font-medium title-font mb-4 text-white">Add new Movie</h1>
    
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-white">Title</label>
            <input type="text" id="name" value={form.title} onChange={(e)=>setform({...form,title:e.target.value})} name="name" class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-white">Year</label>
            <input type="email" id="email" value={form.year} onChange={(e)=>setform({...form,year :e.target.value})}name="email" class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-white">image link</label>
            <input id="message" value={form.image} onChange={(e)=>setform({...form,image:e.target.value})}name="message" class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-white">Discription</label>
            <textarea id="message" value={form.description} onChange={(e)=>setform({...form,description:e.target.value})}name="message" class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        
        <div class="p-2 w-full">
          <button onClick={addMovie} class="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outlinenone hover:bg-green-800 rounded text-lg">
            { loading ? <TailSpin height={25}color="white" /> : "submit" }
          </button>
        </div>
       </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Addmoives