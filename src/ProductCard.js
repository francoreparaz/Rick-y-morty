import React, { Component } from 'react'
import './productCard.css'

export default class ProductCard extends Component {
  render(props) {
    console.log(this.props, "personajes");
    return (
      <div className="cartas">
        {
          this.props.respuesta && this.props.respuesta.map((el, i) => (
            <div key={i} className="carta">
              <h1>{el.name} </h1>
              <img src={el.image} />
              <p>Estado: {el.status} </p>
              <p>Especie: {el.species} </p>
              <p>Tipo: {el.type} </p>
            </div>
          ))
        }
      </div>
    )
  }
}
