import react from "react";

export default function ListItem(props){    // onDone available in props
    return(
        <>
           <div className={props.obj.completed && "completed"}> 
            <p>{props.obj.name}</p>            
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
             onClick={() => props.onDone(props.obj)}>Mark as done</button>
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            onClick={() => props.onDelete(props.obj)}>Delete</button>
           </div>
        </>
    );
}