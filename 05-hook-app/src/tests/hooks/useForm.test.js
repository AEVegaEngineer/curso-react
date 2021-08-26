import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Pruebas en useForm', () => {

  const initialForm = {
      name: "Andres",
      email: 'aevega1991@gmail.com'
  };

  test('debe de regresar un formulario por defecto', () => {
    // en el array retornado, el primer campo, "values" debe tener un equivalente (toEqual)
    // a la constante initialForm, el segundo y tercer argumento deben de ser funciones
    const {result} = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;
    //console.log(result.current.values)

    expect( values ).toEqual(initialForm);
    expect( typeof handleInputChange ).toBe('function');
    expect( typeof reset ).toBe('function');
  });
  
  test('debe de cambiar el valor del formulario (cambiar name)', async() => {
    // llamar a handleInputChange que recibe un evento, este tiene un target y ese target debe
    // tener un name y value    
    const {result} = renderHook(() => useForm(initialForm));
    
    // Inicialmente no me interesa el value, por lo que no lo tomo todavia,
    // para poder llamarlo luego de hacer los cambios, si se toma aca,
    // siempre retorna el valor inicial
    const [, handleInputChange] = result.current;
    const evento = {target:{name: "name", value: "Andres Eduardo"}};
    act( () => { handleInputChange(evento) } );
       
    const [values] = result.current;
    expect( values ).toEqual({...initialForm, name:"Andres Eduardo"});
  });
  
  test('debe de restablecer el formulario con RESET', () => {
    const {result} = renderHook(() => useForm(initialForm));
    
    const [, handleInputChange, reset] = result.current;
    const evento = {target:{name: "name", value: "Andres Eduardo"}};
    act( () => { 
      handleInputChange(evento);  
      reset();
    } );
       
    const [values] = result.current;    
    expect( values ).toEqual(initialForm);
  })
});