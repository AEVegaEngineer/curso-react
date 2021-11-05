import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import moment from 'moment'
import DateTimePicker from 'react-datetime-picker';
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';
import { eventStartAddNew, eventClearActive, eventStartUpdate } from '../../actions/events';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Si estoy ejecutando pruebas, no se debe ejecutar esto ya que fallan los tests al no tener un '#root'
if(process.env.NODE_ENV !== 'test') {
  Modal.setAppElement('#root');
}



const now = moment().minutes(0).seconds(0).add(1, 'hour');
const nowPlusOne = now.clone().add(1,'hour');

const initEvent = {
  title: 'Evento',
  notes: '',
  start: now.toDate(),
  end: nowPlusOne.toDate(),
}

export const CalendarModal = () => {

  const dispatch = useDispatch();
  
  const {modalOpen: isModalOpen} = useSelector(state => state.ui)
  const {activeEvent} = useSelector(state => state.calendar)

  // const [dateStart, setDateStart] = useState(now.toDate());
  // const [dateEnd, setDateEnd] = useState(nowPlusOne.toDate());
  const [titleValid, setTitleValid] = useState(true);

  const [formValues, setFormValues] = useState(initEvent);

  const { notes,title,start,end } = formValues;

  useEffect(() => {
    // se necesita el if porque al refrescar la pagina activeEvent es null y no se puede asignar a un estado
    if(activeEvent){
      setFormValues(activeEvent);
    } else {
      // cuando se borra un evento es necesario restablecer el formulario
      // porque continua almacenando los campos del evento borrado
      setFormValues(initEvent);
    }
  }, [activeEvent]);

  const handleInputChange = ({target}) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  const closeModal = () => {    
    //console.log('cerrar modal');
    dispatch(uiCloseModal());
    dispatch(eventClearActive());
    setFormValues(initEvent);
  }

  const handleStartDateChange = (e) => {
    //setDateStart(e)
    setFormValues({
      ...formValues,
      start: e
    });
  }

  const handleEndDateChange = (e) => {
    //setDateEnd(e)
    setFormValues({
      ...formValues,
      end: e
    });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    //console.log(formValues);
    const momentStart = moment(start);
    const momentEnd = moment(end);
    //console.log(momentStart, momentEnd)
    
    if( momentStart.isSameOrAfter(momentEnd)){
      //console.log('Fecha 2 debe ser mayor')      
      return Swal.fire('Error','La fecha fin debe ser mayor a la fecha de incio', 'error');
    }
    if( title.trim().length < 2){
      setTitleValid(false);
    }
    //TODO realizar grabacion en base de datos
    //console.log(formValues);

    if(activeEvent){
      // actualiza nota
      dispatch( eventStartUpdate( formValues ) );
    } else {
      // crea nueva nota
      dispatch(eventStartAddNew(formValues));
    }

    
    setTitleValid(true);
    closeModal();
    
  }

  return (
    <Modal
        isOpen={isModalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}
      >
      <h1> {activeEvent ? 'Editar evento' : 'Nuevo evento'} </h1>
      <hr />
      <form 
        name="myform" 
        noValidate
        className="container"
        onSubmit={handleFormSubmit}
      >

          <div className="form-group">
              <label>Fecha y hora inicio</label>
              <DateTimePicker
                name="dateStart"
                onChange={handleStartDateChange}
                value={start}
                // value={dateStart}
                className="form-control"
              />
          </div>

          <div className="form-group">
              <label>Fecha y hora fin</label>
              <DateTimePicker
                name="dateEnd"
                onChange={handleEndDateChange}
                value={end}
                // value={dateEnd}
                minDate={start}
                className="form-control"
              />
          </div>

          <hr />
          <div className="form-group">
              <label>Titulo y notas</label>
              <input 
                  type="text" 
                  className={`form-control ${!titleValid && `is-invalid`}`}
                  placeholder="Título del evento"
                  name="title"
                  autoComplete="off"
                  value={ title }
                  onChange={ handleInputChange }
              />
              <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
          </div>

          <div className="form-group">
              <textarea 
                  type="text" 
                  className="form-control"
                  placeholder="Notas"
                  rows="5"
                  name="notes"
                  value={ notes }
                  onChange={ handleInputChange }
              ></textarea>
              <small id="emailHelp" className="form-text text-muted">Información adicional</small>
          </div>

          <button
              type="submit"
              className="btn btn-outline-primary btn-block"
          >
              <i className="far fa-save"></i>
              <span> Guardar</span>
          </button>

      </form>
    </Modal>
  )
}
