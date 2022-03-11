import './App.css';
import ListItem from './todo/ListItem';
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const [todoName, setTodoName] = useLocalStorage("todoName","");
  const [list, setList] = useLocalStorage("list",[]);
  const updateToName = (e) => {
    setTodoName(e.target.value);
  }
  const addTodo = () => {
    console.log(list)
    if(todoName === "") return
    setList([...list,
      {
        id: list.length < 1 ? 1 : list[list.length-1].id +1,
        name: todoName,
        completed: false
      }
    ]);
    setTodoName("");
  };
  // const rndNumber = (() => {
  //   let num = Math.floor((Math.random() * 5) + 1);

  //   return num;
  // });

  const onDone = (item) => {
    let newList = list.map(ListItem => {
      if (ListItem.id === item.id) {
        return {...ListItem, completed:!ListItem.completed}
      }
      return ListItem;
    });
    setList(newList);
    console.log(item)
  }

  const onDelete = item => {
    let newList = list.filter(ListItem => {
      if (ListItem.id === item.id) {
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
