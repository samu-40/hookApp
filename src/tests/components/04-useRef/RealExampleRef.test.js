import {shallow} from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas en RealExampleRef.js', () => {

    const wrapper = shallow(<RealExampleRef/>);
    
    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostar <MultipleCustomHooks/>', () => {
        const button = wrapper.find('.btn');

        button.simulate('click');

        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    });

});
