
import { types } from '../../types/types';

describe('Pruebas en types', () => {
  test('Debe de tener los siguientes types', () => {
    const obj = {
      login: '[Auth] Login',
      logout: '[Auth] Logout',
    
      uiSetError: '[UI] Set Error',
      uiRemoveError: '[UI] Remove Error',
    
      uiStartLoading: '[UI] Start loading',
      uiFinishLoading: '[UI] Finish loading',
    
      notesAddNew: '[Notes] New Note',
      notesSetActive: '[Notes] Set note as active',
      notesLoad: '[Notes] Load note',
      notesUpdated: '[Notes] Update saved note',
      notesFileUrl: '[Notes] Updated image url',
      notesDelete: '[Notes] Delete note',
      notesLogoutCleaning: '[Notes] Logout cleaning',
    };

    expect(JSON.stringify(types)).toBe(JSON.stringify(obj))
  });
})
