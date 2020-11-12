import { GET_PERSONAJE } from './constantes'

const initialState = {
  personajes: []
}



function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PERSONAJE:
      return {
        ...state,
        personajes: state.personajes.concat(action.payload)
      }
    default:
      return state;
  }
}

export default rootReducer;


