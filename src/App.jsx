import './App.css';
import { useState } from 'react';
import ListItem from './todo/ListItem';

function App() {

  const [todoName, setTodoName] = useState("");
  const [list, setList] = useState(["React Native", "Redux"]);
  const updateToName = (e) => {
    setTodoName(e.target.value);
  }
  const addTodo = () => {
    setList([...list, todoName]);
    console.log(todoName)
  };
  return (
   <>
      <div>
        <h3 className="border-blue-500 border bg-blue-300 hover:bg-blue-800">Todo list</h3>
        <input
          type="text"
          placeholder='Add your todo value'
          value={todoName}
          onChange={updateToName}
        />
        <button onClick={addTodo}>Add todo</button>

        {
          list.map(item => <ListItem name={item}/>) 
        }

      </div>
   </>
  );
}

export default App;
