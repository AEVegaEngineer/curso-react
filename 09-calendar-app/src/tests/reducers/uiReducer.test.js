import { uiCloseModal, uiOpenModal } from "../../actions/ui";
import { uiReducer } from "../../reducers/uiReducer";

const initState = {
  modalOpen:false,
}

describe('Pruebas en uiReducer', () => {
  test('Debe de retornar el estado por defecto', () => {
    const state = uiReducer(initState, {});
    expect(state).toEqual(initState);
  });

  test('Debe de abrir y cerrar el modal', () => {
    // abre el modal
    const modalOpen = uiOpenModal();
    let state = uiReducer(initState, modalOpen);
    expect(state).toEqual({ modalOpen:true });

    // cierra el modal que abri
    const modalClose = uiCloseModal();
    state = uiReducer(initState, modalClose);
    expect(state).toEqual({ modalOpen:false });
  });
});

