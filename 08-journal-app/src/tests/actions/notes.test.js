import configureStore from 'redux-mock-store' 
import thunk from 'redux-thunk'
import { startNewNote } from '../../actions/notes';

// aqui deben ir todos los middlewares, en este caso thunk porque se usa para tareas asincronas
const middlewares = [thunk];
// esto es una funcion que me permite crear un store
const mockStore = configureStore(middlewares);

// el estado del store en este preciso instante
// habiendo iniciado sesion
const store = mockStore({
  auth: {
    uid: 'TESTING',

  }
})

/*
  Necesitamos hacer esto ya que las acciones retornan una funcion asincrona,
  ademas hay que hacer un listener del dispatch para saber cuando llama
  a otros metodos
*/
describe('Pruebas con las acciones de notes', () => {
  test('Debe de crear una nueva nota startNewNote', async() => {
    await store.dispatch( startNewNote() );
    // si al ejecutar este dispatch da error FirebaseError: 7 PERMISSION_DENIED
    // significa que hace falta autenticarse en firebase
    // tenemos que crear un ambiente de pruebas que replique produccion, en donde podamos loguearnos

  });
});