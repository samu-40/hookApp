import React from 'react';

export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            type='button'
            className="btn btn-primary me-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    );

});