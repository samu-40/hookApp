import { shallow } from "enzyme";
import HooksApp from "../HooksApp";

describe('Pruebas en HookApp.js', () => {
    test('Debe mostrar correctamente el componente', () => {
        const wrapper = shallow(<HooksApp/>);

        expect(wrapper).toMatchSnapshot();
    })
    
})
