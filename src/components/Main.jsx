import React from "react";
import { useState } from 'react'

function Main(){
    const [count, setCount] = useState(0)
    const handleClick = ()=> setCount(count + 1)
    return(
        <main>
            <h2>Main section here</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quidem asperiores maxime ratione, impedit exercitationem, dicta recusandae porro, minus doloremque fuga. Illum, laudantium porro! Quasi voluptate sit unde laboriosam veniam?</p>
            <h3>Counter: {count}</h3>
            <button onClick={handleClick}>
                Click Me!
            </button>
        
        </main>
    )
}



export default Main;