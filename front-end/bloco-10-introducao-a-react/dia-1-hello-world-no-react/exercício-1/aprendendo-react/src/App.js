import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const compromissos = ['Prova da faculdade de manhã', 'Estar react na trybe a tarde', 'Fazer os exercícios', 'Revidar conteúdo'];
const element = compromissos.map((element) => Task(element));
// const element = Task('Hello');

function App() {
  return (
    <ul>
      {element}
    </ul>
  );
}

export default App;
