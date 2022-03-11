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
    <div class=" grid grid-cols justify-items-center place-items-stretch bg-white-200 h-100">
      <div class="bg-gray-200 h-100">
        <div class="text-gray-700 font-mono text-lg text-center bg-gray-400 px-4 py-2 m-2">
          <h3 className="border-gray-500 border bg-gray-300 hover:gray--800 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Todo list</h3>
          <input className="border-black-500 border bg-white-300 text-gray-800 font-bold py-2 px-4 rounded"
            type="text"
            placeholder='Add your todo value'
            value={todoName}
            onChange={updateToName}
          />
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4" onClick={addTodo}>Add todo</button>
          {
            list.map(item => <ListItem obj={item} onDone={onDone} onDelete={onDelete} />) 
          }
        </div>
      </div>
     </div> 
   </>
  );
}

export default App;
