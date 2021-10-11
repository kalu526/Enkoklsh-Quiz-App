import React, { useState } from 'react';
import { useEffect } from 'react';

export default function Timer ({setstop,questionnumber}){
    const [timer,settimer]=useState(30);
    useEffect(()=>{
        if(timer === 0) return setstop(true);
        const interval=setInterval(()=>{
            settimer((prev)=>prev-1);
        },1000)
        return ()=> clearInterval(interval)
    },[setstop,timer])
    useEffect(()=>{
    settimer(30);
    },[questionnumber])
    return timer;
}