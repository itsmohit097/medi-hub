import React, { useEffect, useState } from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const GoToTop = () => {
    const[isVisible,setIsVisible]=useState(false);
    const gotoBtn=()=>{
        window.scrollTo({top:0,left:0,behavior:'smooth'})
    };

const listentoscroll=()=>{
    let heighttohidden=250;
    const winScroll=
    document.body.scrollTop || document.documentElement.scrollTop;

    if(winScroll>heighttohidden){
        setIsVisible(true);
    }else{
        setIsVisible(false);
    }
}
    useEffect(()=>{
        window.addEventListener("scroll",listentoscroll);
    },[]);

  return (
    <div>
    {isVisible && (
    
    <div className='text-teal-900 text-3xl w-12 h-12 bg-slate-400 hover:bg-slate-600  hover:text-white ease-in-out duration-300 shadow-{theme.colors.shadow} rounded-full fixed bottom-20 right-7 flex justify-center items-center cursor-pointer opacity-75 ' onClick={gotoBtn}>
      <FaArrowUpLong />
    </div>
    )}
    </div>
  );
};


export default GoToTop
