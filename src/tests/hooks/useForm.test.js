import {act, renderHook} from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm.js', () => {

    const initialForm = {
        name: 'Samuel',
        email: 'samu@gmail.com',
    };

    test('Debe retornar el initialForm y sus funciones', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('Debe retornar el name diferente', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Andres'
                }
            });
        });

        const [values] = result.current;

        expect(values).toEqual({...initialForm, name:'Andres'});
    });

    test('Debe resetear el values y retonar el initialForm', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current;
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Andres'
                }
            });

            reset();
        });

        const [values] = result.current;

        expect(values).toEqual(initialForm);
    });
    
});
