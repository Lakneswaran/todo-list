import './App.css';
import { useState } from 'react';
import ListItem from './todo/ListItem';

function App() {

  const [todoName, setTodoName] = useState("");
  const [list, setList] = useState([]);
  const updateToName = (e) => {
    setTodoName(e.target.value);
  }
  const addTodo = () => {
    setList([...list,
      {
        name: todoName,
        completed: false
      }
    ]);
    setTodoName("");
  };
  const onDone = (item) => {
    let newList = list.map(ListItem => {
      if (ListItem.name === item.name) {
        return {...ListItem, completed:!ListItem.completed}
      }
      return ListItem;
    });
    setList(newList);
    console.log(item)
  }

  const onDelete = item => {
    let newList = list.filter(ListItem => {
      if (ListItem.name === item.name) {
        return false;
      }
      return true;
    });
    setList(newList);
    console.log(item)
  }
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
        <button className="border-blue-500 border bg-blue-300 hover:bg-blue-800" onClick={addTodo}>Add todo</button>

        {
          list.map(item => <ListItem obj={item} onDone={onDone} onDelete={onDelete} />) 
        }

      </div>
   </>
  );
}

export default App;
