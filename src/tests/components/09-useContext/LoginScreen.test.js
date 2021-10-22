import { act } from '@testing-library/react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en LoginScreen.js', () => {

    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{ setUser }}>
            <LoginScreen />
        </UserContext.Provider>
    )

    test('Debe mostrar el componente correctamnete', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe llamar a setUser con los argumentos necesarios', () => {
        const loginUser = wrapper.find('button').prop('onClick');

        loginUser();

        expect(setUser).toHaveBeenCalledWith({id: 1, nombre: 'Samuel'});
    });

});
