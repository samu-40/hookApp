import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

import '../03-examples/effect.css';

export const Memorize = () => {

    const {counter, increment} = useCounter();

    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorize</h1>
            <h3>Counter: <Small value={counter}/></h3>
            <hr/>

            <button 
                onClick={increment}
                className='btn btn-success'
            >
                +1
            </button>

            <button 
                className='btn btn-outline-success'
                onClick={() => setShow(!show)}
            >
                Show/Hide <b>{JSON.stringify(show)}</b>
            </button>
        </div>
    );

};
