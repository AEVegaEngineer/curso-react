 /**
 * @jest-environment node
 */
import { deleteDoc, doc, getDoc } from '@firebase/firestore';
import configureStore from 'redux-mock-store' 
import thunk from 'redux-thunk'
import { inAppSaveNote, startLoadingNotes, startNewNote } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { types } from '../../types/types';

// aqui deben ir todos los middlewares, en este caso thunk porque se usa para tareas asincronas
const middlewares = [thunk];
// esto es una funcion que me permite crear un store
const mockStore = configureStore(middlewares);

// el estado del store en este preciso instante
// habiendo iniciado sesion
const initState = {
  auth: {
    uid: 'TESTING',
  }
};

let store = mockStore(initState);

/*
  Estas pruebas son distintas ya que las acciones retornan una funcion asincrona,
  ademas hay que hacer un listener del dispatch para saber cuando llama
  a otros metodos
*/
describe('Pruebas con las acciones de notes', () => {

  // debemos limpiar el store con cada prueba, sino acarrea los cambios  
  beforeEach(() => {
    store = mockStore(initState);
  })

  test('Debe de crear una nueva nota startNewNote', async() => {
    await store.dispatch( startNewNote() );
    // si al ejecutar este dispatch da error FirebaseError: 7 PERMISSION_DENIED
    // significa que hace falta autenticarse en firebase
    // tenemos que crear un ambiente de pruebas que replique produccion, en donde podamos loguearnos
    // para eso se hicieron modificaciones al archivo firebase-config.js
    const actions = store.getActions();
    // console.log(actions);
    expect (actions[0]).toEqual({
      type:types.notesSetActive,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        date: expect.any(Number),
      }
    });

    expect (actions[1]).toEqual({
      type:types.notesAddNew,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        date: expect.any(Number),
      }
    });

    // se borra el registro recien creado para no llenar la base de datos
    const {uid} = store.getState().auth;
    const {id} = actions[1].payload;
    //console.log(`${uid}/journal/notes/${id}`)
    await deleteDoc(doc(db, `${uid}/journal/notes/${id}`));
  });

  test('startLoadingNotes debe cargar las notas', async() => {
    const uid = 'TESTING'
    await store.dispatch( startLoadingNotes(uid) );
    const actions = store.getActions();
    //console.log(actions)

    // verifica las notas
    expect(actions[0]).toEqual({ type: types.notesLoad, payload: expect.any(Array) });
    // verifica los datos de cada nota
    const expected = {
      id: expect.any(String),
      title: expect.any(String),
      body: expect.any(String),
      date: expect.any(Number),
    }
    expect(actions[0].payload[0]).toMatchObject(expected);

  });

  test('startSaveNote debe de actualizar la nota', async() => {
    const note = {
      id: '2OMCoSEIeYLmA3XLRXKA',
      title: 'titulo',
      body: 'body'
    }
    await store.dispatch(inAppSaveNote(note));
    const actions = store.getActions();
    //console.log(actions);
    expect(actions[0].type).toBe(types.notesUpdated);

    const uid = 'TESTING'
    const noteRef = doc(db, `${uid}/journal/notes/${note.id}`);
    const docSnap = await getDoc(noteRef);
    //console.log(docSnap.data())
    expect(docSnap.data().title).toBe( note.title );
  });
});