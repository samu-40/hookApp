import {shallow} from 'enzyme';
import { TodoList } from '../../../components/08-useReducer/components/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en TodoList.js', () => {

    const wrapper = shallow(
        <TodoList 
            todos = {demoTodos}
            handleDelete = {()=>{}}
            handleToggleDone = {()=>{}}
        />
    );

    test('Mostrat el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Wrapper debe tener 2 <TodoListItem/>', () => {
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
    });

    test('TodoListItem debe tener sus funciones como props', () => {
        const fnc1 = (wrapper.find('TodoListItem').at(0).prop('handleDelete'));
        const fnc2 = (wrapper.find('TodoListItem').at(0).prop('handleToggleDone'));

        expect(fnc1).toEqual(expect.any(Function));
        expect(fnc2).toEqual(expect.any(Function));
    });
    
});
