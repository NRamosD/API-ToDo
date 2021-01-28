//import logo from './logo.svg';
import './App.css';
import React, { useEffect , useState} from 'react';

function App() {
  const url = 'https://jsonplaceholder.typicode.com/todos/'
  const [todos, setTodos] = useState()
  const fetchApi = async () =>{
    const response = await fetch(url)
    console.log(response.statusText)
    console.log(response.status)
    const responseJSON = await response.json()
    setTodos(responseJSON)
    console.log(responseJSON)
  }
  useEffect(()=>{
    fetchApi()
  }, [])
  return (
    <div className="App">
      DATOS DE LA API TODOS
      {!todos ? "Cargando..." : 
      todos.map((todo, index) =>{
        //mapeo de los todos
        return <li>{todo.title} {todo.completed ? '👍':'❌'}</li>
      })}
    </div>
  );
}

export default App;
