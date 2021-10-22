import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './components/TodoList';
import TodoFormAdd from './components/TodoFormAdd';

import './style.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAdd = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo,
        });
    }

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId,
        };

        dispatch(action);
    };

    const handleToggleDone = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId,
        }); 
    };

    return (
        <div>
            <h1>TodoApp</h1>
            <hr/>

            <h5>TODOS: {todos.length}</h5>
            
            <div className='row'>
                <div className='col-7'>
                    <TodoList 
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggleDone={handleToggleDone}
                    />
                </div>
                <div className='col-5'>
                    <TodoFormAdd handleAdd={handleAdd}/>
                </div>
            </div>
        </div>
    );

};