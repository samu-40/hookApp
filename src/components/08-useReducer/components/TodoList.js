import React from 'react'
import { TodoListItem } from './TodoListItem'
import PropTypes from 'prop-types';

export const TodoList = ({todos, handleDelete, handleToggleDone}) => {

    return (
        <ul>
            {
                todos.map((todo, i) => (
                    <TodoListItem 
                        key={todo.id}
                        todo={todo}
                        handleDelete={handleDelete}
                        handleToggleDone={handleToggleDone}
                        index={i}
                    />
                ))
            }
        </ul>
    );

};

TodoListItem.propTypes = {
    todos: PropTypes.array,
    handleDelete: PropTypes.func.isRequired,
    handleToggleDone: PropTypes.func.isRequired,
};
