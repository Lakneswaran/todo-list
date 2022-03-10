import './App.css';
import { useState } from 'react';

function App() {

  const [todoName, setTodoName] = useState("");
  const updateToName = (e) => {
    setTodoName(e.target.value);
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
      </div>
   </>
  );
}

export default App;
