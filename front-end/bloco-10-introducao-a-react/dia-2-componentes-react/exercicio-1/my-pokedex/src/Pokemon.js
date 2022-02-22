import React, { Component } from "react";

class Pokemon extends Component {
    render() {
      const { name, type, image, averageWeight } = this.props.PokeData;
      return (
          <div className='Pokemon'>
          <div className='Poke'>
              <div className='Descricao'>
              <p>{name}</p>
              <p>{type}</p>
              <p>Average Weight: {averageWeight.value} kg.</p>
              </div>
              <img src={image}/>
          </div>
          </div>
          )
    }
  }

export default Pokemon;