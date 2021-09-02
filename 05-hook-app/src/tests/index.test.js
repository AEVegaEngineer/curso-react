import ReactDOM from "react-dom";
import { renderToDOM } from "../index";

describe("Pruebas en el ReactDOM.render", () => {
  const originalRender = ReactDOM.render;
  const originalGetElement = global.document.getElementById;
  beforeEach(() => {
    global.document.getElementById = () => true;
    ReactDOM.render = jest.fn();
  });
  afterAll(() => {
    
    
    global.document.getElementById = originalGetElement;
    ReactDOM.render = originalRender;
    
  });
  test("debe llamar al metodo ReactDOM.render", () => {
    renderToDOM();
    //expect(renderToDOM).toHaveBeenCalled();
  });
});