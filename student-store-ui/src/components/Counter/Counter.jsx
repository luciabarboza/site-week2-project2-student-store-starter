import React, {useState} from "react";
import "./Counter.css"

const Counter = () => {
    const [count,setCount] = useState(0)

const increment = () => {
    setCount(count+1)
}

const decrement = () => {
    setCount(count-1)
}



return(
    <div>
        <p>
            Number of items : {count}
            <button id="plus" onClick ={increment}>+</button>
            <button id ="minus"onClick ={decrement}>-</button>
        </p>
        
    </div>
)
}

export default Counter;

