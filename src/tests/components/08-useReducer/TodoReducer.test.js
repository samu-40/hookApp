import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en todoReducer.js', () => {
    
    test('Debe retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);
    });

    test('Debe agregar un TODO', () => {
        const action = {
            type: 'add',
            payload: {
                id: 3,
                desc: 'Comprar leche',
                done: false,
            },
        };

        const state = todoReducer(demoTodos, action);

        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, action.payload]);
    });
    
    test('Debe eliminar un TODO', () => {
        const action = {
            type: 'delete',
            payload: 1
        };

        const state = todoReducer(demoTodos, action);

        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[1]])
    });

    test('Debe cambiar el done de el TODO', () => {
        const action = {
            type: 'toggle',
            payload: 1
        };

        const state = todoReducer(demoTodos, action);

        expect(state.length).toBe(2);
        expect(state[0].done).toBe(true);
    });
    

});
