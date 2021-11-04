import { types } from "../types/types";

describe('Pruebas en Types', () => {
  test('Los types deben de ser iguales a los especificados', () => {
    expect(types).toEqual({
      uiOpenModal: '[ui] Open modal',
      uiCloseModal: '[ui] Close modal',
    
      eventStartAddNew: '[event] Start add new event',
      eventAddNew: '[event] Add new event',
      eventSetActive: '[event] Set active event',
      eventClearActive: '[event] Clear active event',
      eventUpdated: '[event] Updated event',
      eventDeleted: '[event] Deleted event',
      eventLoaded: '[event] Load events',
      eventUnloaded: '[event] Unload events',
    
      authCheckingFinish: '[auth] Finish checking login state',
      authStartLogin: '[auth] Start login',
      authLogin: '[auth] Login',
      authStartRegister: '[auth] Start Register',
      authStartTokenRenew: '[auth] Start token renew',
      authLogout: '[auth] Logout',
    });
  });
})
