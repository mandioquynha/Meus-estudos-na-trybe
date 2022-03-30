import { combineReducers } from "redux";

const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case 'MUDA_NOME_1': 
      return {
        nome: 'oi',
      }
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case 'MUDA_NOME_2': 
      return {
        nome: 'ESTADO_INICIAL_2.nome'
      }
    default:
      return state;
  }
};

const reducerCombinado = combineReducers({
  meuPrimeiroReducer,
  meuSegundoReducer,
});

const store = createStore(reducerCombinado);

window.onload = () => {
  setTimeout(() => {
    store.dispatch({type: 'MUDA_NOME_1'});
    store.dispatch({type: 'MUDA_NOME_2'});
  }, 3000);
};
store.subscribe(() => {
    const nome1 = document.querySelector('#nome-1');
    const nome2 = document.querySelector('#nome-2');
    const estadoGlobal = store.getState();
    console.log(estadoGlobal)
    nome1.innerText = 'oi';
    })

