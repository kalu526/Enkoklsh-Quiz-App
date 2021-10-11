import logo from './logo.svg';
import './App.css';
import Start from "./component/start"
import { useState } from 'react';
import { Quize } from './component/quiz';
import { useEffect } from 'react';
import { useMemo } from 'react';
import Timer from './timer';

export default function App() {
  const [questionnumber,setquestionnumber]=useState(1);
  const [stop,setstop]=useState(false);
  const [earned,setearned]=useState("0");
  const [username,setusername]=useState(null)
  const data=[
    {
      id:1,
      question:"which one of the following is the largest mountain ",
      answer:[
        {
          text:"Everest",
          correct:true,
        },
        {
          text:"Kilimanjaro",
          correct:false,
        },
        {
          text:"Ras Dashn",
          correct:false,
        },
        {
          text:"Himalia",
          correct:false,
        },
      ],
    },
    {
      id:1,
      question:"Grand Central Terminal, Park Avenue, New York is the world's",
      answer:[
        {
          text:"highest railway station",
          correct:false,
        },
        {
          text:"largest railway station",
          correct:true,
        },
        {
          text:"longest railway station",
          correct:false,
        },
        {
          text:"None of the above",
          correct:false,
        },
      ],
    },
    {
      id:1,
      question:"	Entomology is the science that studies",
      answer:[
        {
          text:"Behavior of human beings",
          correct:false,
        },
        {
          text:"Insects",
          correct:true,
        },
        {
          text:"The origin and history of technical and scientific terms",
          correct:false,
        },
        {
          text:"The formation of rocks",
          correct:false,
        },
      ],
    },
    {
      id:1,
      question:"Garampani sanctuary is located at",
      answer:[
        {
          text:"Junagarh, Gujarat	",
          correct:false,
        },
        {
          text:"Gangtok sikim",
          correct:true,
        },
        {
          text:"Kohima, Nagaland",
          correct:false,
        },
        {
          text:"Diphu, Assam",
          correct:false,
        },
      ],
    },
    {
      id:1,
      question:"What is part of a database that holds only one type of information?",
      answer:[
        {
          text:"Report",
          correct:false,
        },
        {
          text:"Record",
          correct:true,
        },
        {
          text:"Field",
          correct:false,
        },
        {
          text:"File",
          correct:false,
        },
      ],
    },
    {
      id:1,
      question:"who is my celebrity crush",
      answer:[
        {
          text:"angelina joli",
          correct:false,
        },
        {
          text:"jusica alba",
          correct:false,
        },
        {
          text:"selena gomez",
          correct:true,
        },
        {
          text:"scarlete johnsen",
          correct:false,
        },
      ],
    },
    {
      id:1,
      question:"'OS' computer abbreviation usually means ?",
      answer:[
        {
          text:"Order of Significance",
          correct:false,
        },
        {
          text:"Operating System",
          correct:true,
        },
        {
          text:"Optical Sensor",
          correct:false,
        },
        {
          text:"Open Source",
          correct:false,
        },
      ],
    },
    {
      id:1,
      question:"Radiocarbon is produced in the atmosphere as a result of",
      answer:[
        {
          text:"collision between fast neutrons and nitrogen nuclei present in the atmosphere",
          correct:true,
        },
        {
          text:"	action of ultraviolet light from the sun on atmospheric oxygen",
          correct:false,
        },
        {
          text:"action of solar radiations particularly cosmic rays on carbon dioxide present in the atmosphere",
          correct:false,
        },
        {
          text:"lightning discharge in atmosphere",
          correct:false,
        },
      ],
    },
    {
      id:1,
      question:"The absorption of ink by blotting paper involves",
      answer:[
        {
          text:"viscosity of ink",
          correct:false,
        },
        {
          text:"capillary action phenomenon",
          correct:true,
        },
        {
          text:"diffusion of ink through the blotting",
          correct:false,
        },
        {
          text:"	siphon action",
          correct:false,
        },
      ],
    },
    {
      id:1,
      question:"Siphon will fail to work if",
      answer:[
        {
          text:"the densities of the liquid in the two vessels are equal",
          correct:false,
        },
        {
          text:"the level of the liquid in the two vessels are at the same height",
          correct:true,
        },
        {
          text:"both its limbs are of unequal length",
          correct:false,
        },
        {
          text:"the temperature of the liquids in the two vessels are the same",
          correct:false,
        },
      ],
    },
    {
      id:1,
      question:"Who is the father of Geometry?",
      answer:[
        {
          text:"Aristotle",
          correct:false,
        },
        {
          text:"Euclid",
          correct:true,
        },
        {
          text:"Pythagoras",
          correct:false,
        },
        {
          text:"Kepler",
          correct:false,
        },
      ],
    },
    {
      id:1,
      question:"who is my celebrity crush",
      answer:[
        {
          text:"angelina joli",
          correct:false,
        },
        {
          text:"jusica alba",
          correct:true,
        },
        {
          text:"selena gomez",
          correct:false,
        },
        {
          text:"scarlete johnsen",
          correct:false,
        },
      ],
    },
    {
      id:1,
      question:"Who is the author of the book 'Nineteen Eighty Four'?",
      answer:[
        {
          text:"Thomas Hardy",
          correct:false,
        },
        {
          text:"Emile Zola",
          correct:false,
        },
        {
          text:"George Orwell",
          correct:true,
        },
        {
          text:"Walter Scott",
          correct:false,
        },
      ],
    }
    
  ]
  const moneypyramid=useMemo(()=>
    [
      {id:1, amount:"$100"},
      {id:2, amount:"$150"},
      {id:3, amount:"$200"},
      {id:4, amount:"$300"},
      {id:5, amount:"$500"},
      {id:6, amount:"$1000"},
      {id:7, amount:"$2000"},
      {id:8, amount:"$4000"},
      {id:9, amount:"$6000"},
      {id:10, amount:"$8000"},
      {id:11, amount:"$10000"},
      {id:12, amount:"$12000"},
      {id:13, amount:"$14000"},
      {id:14, amount:"$16000"},
      {id:15, amount:"$18000"},
  ].reverse(),
  []
  );
useEffect(()=>{
  questionnumber >1 && setearned(moneypyramid.find((m)=>m.id ===questionnumber-1).amount)
},[questionnumber])
  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
       {stop ? <h1 className="endtext">you earned {earned}</h1>:(
         <>
        <div className="top">
       
       <div className="timer"><Timer setstop={setstop} questionnumber={questionnumber}/></div>
     </div>
     <div className="bottom"><Quize data={data} setstop={setstop} questionnumber={questionnumber} setquestionnumber={setquestionnumber}/></div>
     </>
       )}
       
     </div>
     <div className="pyramid">
      <ul className="moneylist">
    {moneypyramid.map(e=>(
       <li className={questionnumber === e.id ? "moneylistitem active":"moneylistitem "}>
       <span className="moneylistitemnumber">{e.id}</span>
       <span className="moneylistitemamount">{e.amount}</span>
     </li>
    ))}
        
</ul>

     </div>
        </>
      ):<Start setusername={setusername}/>}
   
    
    </div>
  );
}


