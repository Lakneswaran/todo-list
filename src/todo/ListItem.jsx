import react from "react";

export default function ListItem(props){    // onDone available in props
    return(
        <>
           <div className={props.obj.completed && "completed"}> 
            <p>{props.obj.name}</p>            
            <button className="border-blue-500 border bg-blue-300 hover:bg-blue-800"
             onClick={() => props.onDone(props.obj)}>Mark as done</button>
            <button className="border-blue-500 border bg-blue-300 hover:bg-blue-800"
            onClick={() => props.onDelete(props.obj)}>Delete</button>
           </div>
        </>
    );
}