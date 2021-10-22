import { act } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en TodoApp.js', () => {

    const wrapper = shallow(<TodoApp/>)
    
    Storage.prototype.setItem = jest.fn();

    test('Mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe agregar un TODO', () => {
        const wrapper = mount(<TodoApp/>);

        act(() => {
            wrapper.find('TodoFormAdd').prop('handleAdd')(demoTodos[0]);
            wrapper.find('TodoFormAdd').prop('handleAdd')(demoTodos[1]);
        });

        expect(wrapper.find('h5').text().trim()).toBe('TODOS: 2');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });

    test('Debe eliminar un TODO', () => {
        wrapper.find('TodoFormAdd').prop('handleAdd')(demoTodos[0]);
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);

        expect(wrapper.find('h5').text().trim()).toBe('TODOS: 0');
    });
    
});
