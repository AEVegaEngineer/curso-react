import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
Enzyme.configure({ adapter: new Adapter() });

// implementacion para permitir las pruebas de File upload ya que
// los objetos file internamente llaman al scroll del dom y eso no existe
// en el terminal de pruebas
//const noScroll = () => {};
//Object.defineProperty(window, 'scrollTo', { value: noScroll, writable: true });