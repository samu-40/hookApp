import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en AppRouter.js', () => {

    const user = {
        id: 1,
        name: 'Andres',
    };
    
    const wrapper = mount(
        <UserContext.Provider value = {{user}}>
            <AppRouter/>
        </UserContext.Provider>
    );

    test('Debe mostrar elcomponente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    

})
