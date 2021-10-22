import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import '../03-examples/effect.css';

import './layout.css';


export const Layout = () => {
    
    const { counter, increment } = useCounter(1);
    
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const { quote } = !!data && data[0];
    //                |________________|
    //                        |
    // Si data tiene algo entonces extrae el elemento cero de esta.

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {

        setBoxSize(pTag.current.getBoundingClientRect());

    }, [quote]);

    return (
        <div>
            <h3>LayoutEffect</h3>
            <hr />

            <figure className='text-end'>
                <blockquote className="blockquote">
                    <p ref={pTag}>{quote}</p>
                </blockquote>
            </figure>

            <pre>{JSON.stringify(boxSize, null, 3)}</pre>

            <button
                className='btn btn-secondary'
                onClick={increment}
            >
                Next quote
            </button>
        </div>
    );

};

