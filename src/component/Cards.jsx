import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars';
import { TailSpin } from 'react-loader-spinner';
import { getDocs } from 'firebase/firestore';
import { movie } from '../firebase/firebase';
import { Link } from 'react-router-dom';
import './cards.css'; 
const Cards = () => {
  const [data,setdata]=useState([ ]);
  const[loading,setloading]=useState(true);
    useEffect(()=>
    {
      async function getdata(){
        setloading(true);
        const data=await getDocs(movie);
        data.forEach((doc)=>{
          setdata((prv)=>[...prv,{...(doc.data()),id:doc.id}])
        })
        setloading(false);

      }
      getdata();

    },[])




 
  return (
    <div className='cardbody'>
     
    <div className='cardsection'>
    { data.map((e,i)=>{
      return(
    <Link to={`/details/${e.id}`}>
      <div key={i} className='carditem' >
        <img  src={e.image}alt='image'  />
        <div className="content">
          <h3>{e.title}</h3>
          <p>{e.year}</p>
          <span id='spans'>MEU  {e.rating/e.rated}</span>
         <ReactStars size={15} half={true} value={e.rating/e.rated} edit={false}/>
        
        </div>
      </div>
      </Link>
    );
  })}
    </div>

    </div>
   
    
  );
}

export default Cards