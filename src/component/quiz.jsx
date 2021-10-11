import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import play from '../asset/play.wav';
import success from '../asset/success.mp3';
import failur from '../asset/failur.mp3';
import '../App.css';
export function Quize({data,setstop,questionnumber,setquestionnumber}){
    const [question,setquestion]=useState(null);
    const [selectanswer,setselectanswer]=useState(null);
    const [className,setclassName]=useState('answer');
    const [letsplay]=useSound(play)
    const [correct]=useSound(success)
    const [wrong]=useSound(failur)

    useEffect(()=>{
    letsplay();
    },[letsplay])

    useEffect(() => {
        setquestion(data[questionnumber-1]);
        
    }, [data,questionnumber])
    const delay=(duration,callback)=>{
        setTimeout(()=>{
            callback();
        },duration)
    }

    const handleclick=(a)=>{
    setselectanswer(a);
    setclassName(" answer active")
    delay(3000,()=>{
        setclassName(a.correct ?"answer correct" :"answer wrong")
    });
    delay(5000,()=>{
       if(a.correct){
           correct();
           delay(1000,()=>{
            setquestionnumber((prev)=>prev+1);
            setselectanswer(null);
           })
          

       }else{
           wrong();
           delay(1000,()=>{
            setstop(true);
           })
           
       }
    });
    
    }
    return(
  <div className="quiz">
      <div className="question"> {question?.question}</div>
      <div className="answers">
          {question?.answer.map((a)=>(
            <div className={selectanswer ===a?className:"answer"} onClick={()=>handleclick(a)}>{a.text}</div>
          ))}
          
      </div>
  </div>

    );
}