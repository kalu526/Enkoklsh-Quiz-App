import React from 'react';
import { useRef } from 'react';

export default function Start({setusername}){
    const inputref=useRef();
    const handleclick=()=>{
        inputref.current.value && setusername(inputref.current.value)
    }
    return(
        <div className="start">
        <input type="text" placeholder="Enter Your Name" className="startInput" ref={inputref}/>
        <button className="startbutton" onClick={handleclick}>Start</button>

        </div>
    )
}