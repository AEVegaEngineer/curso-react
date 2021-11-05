import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';
import Swal from 'sweetalert2'

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
Enzyme.configure({ adapter: new Adapter() });

// como sweetalert2 tiene exportacion por defecto (sin llaves)
// no es necesario mockear Swal, sino directamente el metodo
// que se esta llamando (fire)
jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
  close: jest.fn(),
}));
// Cuando una lib externa llame sus metodos en las pruebas y arroje errores,
// se puede mockear sus metodos de esta misma manera

// para las pruebas del modal, se debe mockear el getContext ya que en
// entorno de pruebas no existe un dom del cual extraerlo.
HTMLCanvasElement.prototype.getContext = () => {}