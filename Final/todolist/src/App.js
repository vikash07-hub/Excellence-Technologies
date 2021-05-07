
import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {

const[newtask,setnewtask]=useState('')
const[tasks,settasks]=useState([])

function addtask(){
  settasks([...tasks, newtask])
  }

  

const tasklist = tasks.map((object, index)=>{
   return <div className="row justify-content-center"> 
     <h1 className="col-md-6 text-left">{index+1} {object}</h1>
    
   </div>
  })

  return (
    <div className="App">
     <h1>Todo List</h1>
    <div className="row justify-content-center">
      <input type="text" placeholder="Task to been assign" className="form-control col-md-6 m-1"  value={newtask} onChange={(e)=>{setnewtask(e.target.value)}}/>
       <button onClick={addtask} className="btn btn-success col-md-1 m-1">ADD TASK</button>
    </div>
    
    {tasklist}
    </div>
  );
}

export default App;
