import {shallow} from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';

jest.mock('../../../hooks/useFetch');

describe(',Pruebas en MultipleCustomHooks.js', () => {
    
    test('Debe mostrarse correctamente', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null,
        });

        const wrapper = shallow(<MultipleCustomHooks/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrarse la info', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'Samuel',
                quote: 'Hola mundo',
            }],
            loading: false,
            error: null,
        });

        const wrapper = shallow(<MultipleCustomHooks/>);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.blockquote').text().trim()).toBe('Hola mundo');
        expect(wrapper.find('.blockquote-footer').text().trim()).toBe('Samuel');
    });
    

});
