 /**
 * @jest-environment node
 */

import { doc, getDoc } from '@firebase/firestore';
import configureStore from 'redux-mock-store' 
import thunk from 'redux-thunk';
import { startUploading } from "../../actions/notes";
import { db } from '../../firebase/firebase-config';


jest.mock('../../helpers/fileUpload', () => ({
  fileUpload: jest.fn( () => {
    //return 'https://hola-mundo.com/cosa.jpg';
    return Promise.resolve('https://hola-mundo.com/cosa.jpg');
  })
}))

// aqui deben ir todos los middlewares, en este caso thunk porque se usa para tareas asincronas
const middlewares = [thunk];
// esto es una funcion que me permite crear un store
const mockStore = configureStore(middlewares);

// el estado del store en este preciso instante
// habiendo iniciado sesion
const initState = {
  auth: {
    uid: 'TESTING',
  },
  notes: {
    active: {
      id: '2OMCoSEIeYLmA3XLRXKA',
      title: 'Hola',
      body: 'Mundo'
    }
  }
};  

let store = mockStore(initState);

global.scrollTo = jest.fn(); 

/*
* SE SEPARARON LAS PRUEBAS A OTRO ARCHIVO YA QUE PARA EL PRIMER ARCHIVO ERA NECESARIA
* LA NOTACION  @jest-environment node EN LA CABECERA, COSA QUE RETORNA ERROR EN ESTA PRUEBA
*/

describe('Segundo lote de pruebas de notes', () => {

  // debemos limpiar el store con cada prueba, sino acarrea los cambios  
  beforeEach(() => {
    store = mockStore(initState);
  })

  test('startUploading debe de actualizar el url de la imagen', async() => {
    //const file = new File([], 'foto.png');
    const file = [];
    await store.dispatch(startUploading(file));

    const uid = 'TESTING'
    const noteRef = doc(db, `${uid}/journal/notes/2OMCoSEIeYLmA3XLRXKA`);
    const docSnap = await getDoc(noteRef);
    //console.log(docSnap.data())
    expect(docSnap.data().url).toBe( 'https://hola-mundo.com/cosa.jpg' );

  });
});