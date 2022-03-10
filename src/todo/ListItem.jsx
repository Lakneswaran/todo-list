import react from "react";

export default function ListItem(props){
    return(
        <>
           <div> 
            <p>{props.obj.name}</p>
            <button>Mark as done</button>
            <button>Delete</button>
           </div>
        </>
    );
}