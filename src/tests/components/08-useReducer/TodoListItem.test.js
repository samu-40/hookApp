import {shallow} from 'enzyme';
import {TodoListItem} from '../../../components/08-useReducer/components/TodoListItem'
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en TodoListItem.js', () => {
    const handleDelete = jest.fn();
    const handleToggleDone = jest.fn();
    const index = 0

    const wrapper = shallow(
        <TodoListItem
            todo={demoTodos[0]}
            handleDelete={handleDelete}
            handleToggleDone={handleToggleDone}
            index={index}
        />
    );
        
    const id = demoTodos[0].id;
    const btn = wrapper.find('.btn');
    const p = wrapper.find('p');

    test('Debe mostrarse correctamente el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe llamase handleDelete', () => {
        btn.simulate('click');

        expect(handleDelete).toHaveBeenCalledWith(id);
    });

    test('Debe llamase handleToggleDone', () => {
        p.simulate('click');

        expect(handleToggleDone).toHaveBeenCalledWith(id);
    });

    test('Mostrar el texto correctamente', () => {
        const text = p.text().trim();

        expect(text).toBe(`${index+1}. ${demoTodos[0].desc}`);
    });    

    test('Debe tener la clase complete si TODO.done = true', () => {
        const todo = demoTodos[0];
        todo.done = true;
        
        const wrapper = shallow(
            <TodoListItem
                todo={todo}
                handleDelete={()=>{}}
                handleToggleDone={()=>{}}
                index={0}

            />
        );
        
        const clase = wrapper.find('p').hasClass('complete');

        expect(clase).toBe(true);
    })
    

});
