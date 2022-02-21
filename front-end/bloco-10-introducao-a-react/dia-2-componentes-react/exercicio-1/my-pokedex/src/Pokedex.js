import React, { Component } from "react";
import pokemons from "./data";
import Pokemon from "./Pokemon";

class Pokedex extends Component {
    render() {
      return (
        pokemons.map((item) =>
          <Pokemon PokeData={item} key={item.id}/>
          )
      )
    }
  }

export default Pokedex;