import "./styles.css" 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import {List, IconButton,Typography} from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import DeleteIcon from '@mui/icons-material/Delete';

export default function App() {
  const [val, setval] = useState('');
  const [todoarr, settodoarr] = useState([]);

  const addtodo = () => {
    console.log(val);
    settodoarr((currenttodo) => {
      return [...currenttodo, { id: crypto.randomUUID(), title: val }];
    });
    console.log(todoarr);
    setval("")
  };

  const deleteTodo =(id) =>{
      settodoarr((currenttodo) => {
        return currenttodo.filter(todo =>todo.id !=id)
      })
  }

  console.log(todoarr)

  return (
    <div className="App">
      <div className="Mainwindow-parent">
        <div className="todoapp">
          <form className="todoinput" htmlFor="Input" onSubmit={(e) => e.preventDefault()}>
            <div className="todoform">
              <TextField
                id="outlined-basic"
                variant="outlined"
                value={val}
                onChange={(e) => setval(e.target.value)} // Update state when typing
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: 'blue', // Change the border color when focused
                    },
                  },
                  '& label.Mui-focused': {
                    color: 'blue', // Change the label color when focused
                    padding: '10px',
                  },
                }}
              />

              <Button
                variant="contained"
                sx={{
                  margin: '22px',
                  height: '55px',
                  width: '90px',
                  backgroundColor: ' #383ccc',
                  color: 'white',
                  fontSize: '16px',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: 'darkblue',
                  },
                }}
                onClick={addtodo} // Button should trigger the addtodo function
              >
                ADD
              </Button>
            </div>
          </form>
          <div className="todotabs">
          {todoarr.length > 0 && (
              <List
                sx={{
                  background: '#c1e2e7',
                  border: "1px solid #808080",
                  borderRadius: "10px",
                  color: "black",
                  width: '450px',
                }}
              >
                {todoarr.map((todo) => (
                  <ListItem key={todo.id}>
                    <ListItemText primary={todo.title} />
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      sx={{
                        marginRight: '5px',
                        color: 'black',
                        '&:hover': {
                          backgroundColor: '#black',
                        },
                      }}
                      onClick={() => deleteTodo(todo.id)} // Delete a todo on click
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
              
            )}
            </div>
          </div>

        </div>
      </div>
  );
}
