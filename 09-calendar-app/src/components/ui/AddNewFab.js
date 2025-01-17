import React from 'react'
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';

export const AddNewFab = () => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    //console.log("boton clickeado")
    dispatch(uiOpenModal());
  }
  return (
    <button className="btn btn-primary fab" onClick={handleButtonClick}>
      <i className="fa fa-plus"></i>
    </button>
  )
}
