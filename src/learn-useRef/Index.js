import React, { useState, useEffect, useRef } from 'react';
import "./style.css";

function App2(){
    const [count, setCount] = useState(0);
    const pageRenderRef = useRef(1);

    const handleDecrement = () => {
        if (count === 0) return;
        setCount(prevCount => prevCount - 1);
    }
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    }
    const handleReset = () => {
        setCount(0);
    }

    useEffect(() => {
        pageRenderRef.current = pageRenderRef.current + 1;
    })

    return (
        <div className="App">
            <h1>Page render = {pageRenderRef.current} times</h1>
            <h3>Kelompok 24</h3>
            <div className="counter">
                <h2>{count}</h2>
                <div className="btnContainer">
                    <button onClick={handleDecrement}>-1</button>
                    <button onClick={handleIncrement}>+1</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default App2