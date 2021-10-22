import React, { useRef } from 'react'
import '../03-examples/effect.css'

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = (e) => inputRef.current.select();

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>

            <input
                className='form-control'
                type='text'
                placeholder='Your name'
                ref = {inputRef}
            />

            <button 
                className='btn btn-outline-success mt-3'
                onClick={handleClick}
            >
                Focus
            </button>
        </div>
    );

};
