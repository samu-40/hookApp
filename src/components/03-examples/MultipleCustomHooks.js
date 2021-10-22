import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './effect.css';


export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {author, quote} = !!data && data[0];
    //                      |________________|
    //                              |
    // Si data tiene algo entonces extrae el elemento cero de esta.

    return (
        <div>
            <h3>Breaking Bads: Quotes</h3>
            <hr />

            {
                loading ?
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    )
                    :
                    (
                        <figure className='text-end'>
                            <blockquote className="blockquote">
                                <p>{quote}</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                {author}
                            </figcaption>
                        </figure>
                    )
            }

            <button 
                className='btn btn-secondary'
                onClick={increment}
            >
                Next quote
            </button>
        </div>
    );

};
