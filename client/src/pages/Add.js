import React, { useState } from 'react';
import Navigation from '../composants/Navigation';
import axios from 'axios'
import api from "../services/api";
import TaskService from "../services/tasks.services";
import '../styles/register.css'

const Add = () => {

    const [label, setLabel] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
      };

      const createTaskHandler = async (e) => {
        e.preventDefault();
        //setIsLoading(true);
        TaskService.addTask(label, isChecked);
      };
    

    return (
        <div>
            <Navigation />
            <h1>Ajouter une nouvelle tâche</h1>
            <br />
            
            <div className='formu' >
            <form className='forme' onSubmit={createTaskHandler}>
                <div className="form-group">
                    <label>Label </label><br /> 
                    <input type="text" className='form-control' onChange={(e)=>setLabel(e.target.value)} />
                </div>
                <br />
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="complete" name='complete' checked={isChecked} onChange={handleCheckboxChange} />
                    <label class="form-check-label" htmlFor="complete" >Tâche effectuée</label>
                </div>
                <br />
                <button type="submit" className="btn btn-success" >Ajouter</button>
            </form>
            </div>
            

        </div>

    );
};

export default Add;