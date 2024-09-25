import { Flex } from "antd";
import React from "react";
import { useState } from "react";

function Todo(){

    // const handleChange=(e)=>{
    //     console.log(e.target.innerText)
    // }

    const handleClick2=(value)=>{
        console.log(`thanks for the change ${value}`)
    }

    const [count,setCount] = useState(100)
    const [int,setInt] = useState(1)

    function handleInc(){
        setCount((precount)=>{return precount + 1})
    }

    function handleDec(){
        setCount((precount)=>{return precount - 1})
    }
    const name = ['alphabet','ball','catcher']
    function handleName(){
        setInt((int)=> {return int = Math.floor(Math.random()*3)})
    }

    return(
        <div style={{display:'flex', 
        width:'100vw',
        height:'100vh',
        alignItems: 'center', 
        justifyContent:'center'}}>
        <div>
            <p onDoubleClick={()=>handleClick2('selva')} >this is a paragraph</p>
            <div style={{color:'blueviolet' }}>this is {name[int]}</div>
            { /*using anonymous function */ }
            <button onClick={()=>handleName()}>this is a button</button>
        </div>
        <div>
            <button onClick={handleInc} >+</button>
            <span>{count}</span>
            <button onClick={handleDec} >-</button>
            </div>
        </div>
        
    )
}
export default Todo;