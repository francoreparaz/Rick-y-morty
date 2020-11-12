import axios from 'axios'
import { GET_PERSONAJE } from './constantes'



export function getPersonaje(value) {
  console.log("personajes")
  return function (dispatch) {
    return axios.get(`https://rickandmortyapi.com/api/character/${value}`)
      .then(resp => {
        dispatch({
          type: GET_PERSONAJE,
          payload: resp.data
        })
      })
  }
}

