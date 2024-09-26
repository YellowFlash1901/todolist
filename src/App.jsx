import "./styles.css" 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function App(){
  const[newitem, setnewitem] = useState("");
  const[todos, settodos] = useState([]);
  function handlesumbit(e){
    e.preventDefault();
    settodos((currenttodos)=>{
      return[
        ...currenttodos,{title : newitem}
      ]
    })
  }
  return (
    <div className="App">
    <div className="Side-bar-parent"><div className="Side-bar">User Name</div></div> 
    <div className="Mainwindow-parent">
    <div id="todolabel">
      Todo:
    </div>
    <form className="todoinput" htmlFor ="Input" onSubmit={handlesumbit}
            value={newitem}
        onChange={(e) => setnewitem(e.target.value)}>
      <TextField id="filled-basic" label="Filled" variant="filled" />
      </form>     
    </div>
    <label id="tasklist">
      Task List:  
    </label>
    {todos.map(todo => {
      return     <FormControlLabel required control={<Checkbox />} label={todo.title} />

    })}

      </div>

    //to make user name 
  )
}



