import { renderHook } from "@testing-library/react-hooks"
import { useCounter } from "../../hooks/useCounter";
describe('Pruebas en useCounter', () => {
  test('debe de retornar valores por defecto y verificar que los metodos de Counter sean funciones', () => {
    const {result} = renderHook(() => useCounter());
    expect( result.current.Counter ).toBe(10);

    expect( typeof result.current.increment ).toBe('function');
    expect( typeof result.current.decrement ).toBe('function');
    expect( typeof result.current.reset ).toBe('function');
  });
    
});