import React, {useState, useEffect} from 'react'

const Counter =()=>{
    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log("componentDidMount")
    },[])
    useEffect(()=>{
        console.log("componentdidUpdate")
    },[count])
    useEffect(()=>{
        console.log("componentDidUnmount")
        return()=> console.log("Return is being ran")
    },[])


    return(
        <div>
            <h4>Counter</h4>
            <p>Current count: {count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}
export default Counter;