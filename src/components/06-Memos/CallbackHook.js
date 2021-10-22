import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../03-examples/effect.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => setCounter(counter + 1);

    const increment = useCallback((num) => {
        setCounter(c => c + num);
    }, [setCounter]);

    return (
        <div>
            <h1>Callback Hook: {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment}/>
        </div>
    );

};