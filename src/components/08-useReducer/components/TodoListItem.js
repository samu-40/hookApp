import React from 'react';
import PropTypes from 'prop-types';

export const TodoListItem = ({todo, handleDelete, handleToggleDone, index}) => {

    return (
        <li
            className='list-group-item'
        >

            <p
                className={`${todo.done && 'complete'}`}
                onClick={() => handleToggleDone(todo.id)}
            >
                {index + 1}. {todo.desc}
            </p>

            <button
                className='btn btn-danger'
                onClick={() => handleDelete(todo.id)}
            >
                Delete
            </button>

        </li>
    );

};

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggleDone: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
};
