import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe('Pruebas en useFetch', () => {

  test('debe de retornar la informacion por defecto', () => {
    const {result} = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
    const { data, loading, error } = result.current; // primero se ejecuta esto antes del fetch
    // por lo que los expects estan apenas haciendo el llamado y el status es loading
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test('debe de tener la info deseada', async() => {
    const {result, waitForNextUpdate} = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
    await waitForNextUpdate({timeout:10000}); // hace el update con timeout por si el internet va lento
    const { data, loading, error } = result.current; // extraemos el resultado
    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);

  });

  test('debe de manejar el error', async() => {
    const {result, waitForNextUpdate} = renderHook(() => useFetch('https://reqres.in/apid/users?page=2'));
    await waitForNextUpdate({timeout:10000}); // hace el update con timeout por si el internet va lento
    const { data, loading, error } = result.current; // extraemos el resultado
    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe("No se pudo cargar la info");

  });
  
    
});