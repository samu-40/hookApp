import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../../../hooks/useForm';

const TodoFormAdd = ({handleAdd}) => {

    const [{description}, handleInputChanges, reset] = useForm({description:''});

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {return};

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };

        handleAdd(newTodo);

        reset();

    };


    return (
        <>
            <h6>Agregar TODO</h6>
            <hr />

            <form
                className='d-grid gap-2'
                onSubmit={handleSubmit}
            >
                <input
                    type='text'
                    name='description'
                    placeholder='TODO....'
                    autoComplete='off'
                    className='form-control'
                    value={description}
                    onChange={handleInputChanges}
                />

                <button
                    type='submit'
                    className='btn btn-outline-success mt-1 '
                >
                    Add
                        </button>
            </form>
        </>
    );
};

TodoFormAdd.propTypes = {
    handleAdd: PropTypes.func.isRequired,
}

export default TodoFormAdd
