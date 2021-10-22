import {shallow} from 'enzyme';
import TodoFormAdd from "../../../components/08-useReducer/components/TodoFormAdd";

describe('Pruebas en TodoFormAdd.js', () => {

    const handleAdd = jest.fn();

    const wrapper = shallow(<TodoFormAdd handleAdd={handleAdd}/>);

    test('Mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('No se debe llamar a handleAdd', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({preventDefault(){}});

        expect(handleAdd).toHaveBeenCalledTimes(0);
    });

    test('Se debe llamar a handleAdd con un objeto como parametro y resetear el input', () => {
        const value = 'Aprender GitHub';

        wrapper.find('input').simulate('change', {
            target:{
                value, name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit'); 

        formSubmit({preventDefault(){}});

        expect(handleAdd).toHaveBeenCalledTimes(1);
        expect(handleAdd).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false,
        });
        expect(wrapper.find('input').prop('value')).toBe(''); 
    });
    
});