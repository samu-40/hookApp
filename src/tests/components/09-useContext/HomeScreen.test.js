import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Pruebas en HomeScreen.js', () => {

    const user = {
        name: 'Samuel',
        email: 'Samu@gmail.com',
    };

    const wrapper = mount(
        <UserContext.Provider value = {{user}}>
            <HomeScreen/>
        </UserContext.Provider>
    );
    
    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
});
