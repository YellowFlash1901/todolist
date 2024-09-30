import "./styles.css" 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import {List,IconButton} from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import DeleteIcon from '@mui/icons-material/Delete';



export default function App(){

  return (
    <div className="App">
    <div className="Mainwindow-parent">
    <div className= "todoapp">
    <form className="todoinput" htmlFor ="Input">
      <div className="todoform">
    <TextField
      id="outlined-basic"
      variant="outlined"
      
      sx={{

        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: 'blue', // Change the border color when focused
          },
        },
        '& label.Mui-focused': {
          color: 'blue', // Change the label color when focused
          padding:'10px'
        },
      }}
    />

<Button
      variant="contained"
      sx={{
        margin :'22px',   
        height: '55px',    
        width:'90px',    
        backgroundColor: ' #383ccc', 
        color: 'white',           
        fontSize: '16px',        
        borderRadius: '8px',     
        '&:hover': {
          backgroundColor: 'darkblue', 
        },
      }}
    >
      ADD
      </Button>
      </div>
  </form> 
  <div className="todotabs">
    
  <List sx ={{
    background:'#c1e2e7',
    border: "1px solid #808080", /* 2px width, solid style, grey color */

    borderRadius: "10px",
    color:"black",
    width:'450px'             // Optional: Add padding to the list


  }}>
      <ListItem>
        <ListItemText  primary="Full width variant belo" /><IconButton
              edge="end"
              aria-label="delete"
              sx={{
                marginRight:'5px',
                color: 'black', // Change the color of the icon
                '&:hover': {
                  backgroundColor: '#black', // Change background on hover
                },
              }}
            >
              <DeleteIcon />
            </IconButton>

      </ListItem>
 
  </List>
  </div>
        </div>
    </div>


      </div>

    //to make user name 
  )
}



