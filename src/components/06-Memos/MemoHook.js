import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';

import '../03-examples/effect.css';

export const MemoHook = () => {

    const {counter, increment} = useCounter(1000);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr/>

            <p>{memoProcesoPesado}</p>

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
