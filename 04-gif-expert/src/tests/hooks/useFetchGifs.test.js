import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from "@testing-library/react-hooks";
describe('Pruebas en el hook useFetchGifs', () => {
    test('Debe de retornar el estado inicial', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
        const {data,loading} = result.current;
        
        // esto es para evitar llamar al setState en el hook cuando ya se habia desmontado
        // tambien para evitar que falle por conexion lenta, ya no es necesario porque tenemos
        // useref en el hook
        await waitForNextUpdate({timeout:10000}); 
        expect(data).toEqual([]);
        expect(loading).toEqual(true);
    });

    test('debe de retornar un arreglo de imgs y el loading en false', async() => {
        const {result,waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
        await waitForNextUpdate({timeout:10000});
        const {data,loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
})
