import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";
describe('Pruebas en useCounter', () => {
  test('debe de retornar valores por defecto y verificar que los metodos de Counter sean funciones', () => {
    const {result} = renderHook(() => useCounter());
    expect( result.current.Counter ).toBe(10);

    expect( typeof result.current.increment ).toBe('function');
    expect( typeof result.current.decrement ).toBe('function');
    expect( typeof result.current.reset ).toBe('function');
  });


  test('debe de tener el counter en 100', () => {
    const {result} = renderHook(() => useCounter(100));
    expect( result.current.Counter ).toBe(100);
  });

  test('Debe de incrementar el counter en 1', () => {
    const {result} = renderHook(() => useCounter(100));
    const {increment} = result.current;
    act( () => { increment(1) } );
    const {Counter} = result.current;
    expect(Counter).toBe(101);

  });

  test('Debe de decrementar el counter en 1', () => {
    const {result} = renderHook(() => useCounter(100));
    const {decrement} = result.current;

    // para poder llamar dos veces a un método de esta manera
    // hay que asegurarse de que el método tenga la forma:
    // setCounter(Counter => Counter+factor);  
    // en lugar que
    // setCounter(Counter + factor);
    // La razón de que el decrement() no haga la acción nos 
    // veces es porque básicamente estamos haciendo esto:
    // setCounter(100 - 1) 
    // setCounter(100 - 1)

    act( () => { decrement(1); decrement(2); } );
    const {Counter} = result.current;
    expect(Counter).toBe(97);

  });

  test('Debe de resetear el counter luego de haber incrementado', () => {
    const {result} = renderHook(() => useCounter(100));
    const {increment, reset} = result.current;
    act( () => { 
      increment(1); 
      reset();
    } );
    const {Counter} = result.current;
    expect(Counter).toBe(100);

  });
  
    
});