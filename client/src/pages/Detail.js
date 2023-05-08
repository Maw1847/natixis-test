import React, { useState, useEffect } from 'react';
import Navigation from '../composants/Navigation';
import api from "../services/api";


const Detail = () => {

    const [id, setID] = useState(null);

    const [task, setTask] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const lsId = localStorage.getItem("id");
        if (!lsId) {
            // ID n'est pas défini, sortir de l'effet
            return;
        }

        setID(lsId);
    }, []);

    console.log("id: ", id);

    /*const retrieveTask = async () => {
        setIsLoading(true);
        let taskId = id;
        let url = "/tasks/" + taskId;
        const response = await api.get(url);
        console.log(response.data);
        let res = response.data;
        return res;
        
      };

      useEffect(() => {
        const getTask = async () => {

        if (!id) {
            // ID n'est pas défini, sortir de l'effet
            return;
            }
            
        const theTask = await retrieveTask();
        if (theTask) {
            setTask(theTask);
            setIsLoading(false);
        }
          
        };
    
        getTask();
      }, [id]);*/

      useEffect(() => {
        const retrieveTask = async () => {
          setIsLoading(true);
          const url = "/tasks/" + id;
          const response = await api.get(url);
          console.log(response.data);
          let res = response.data;
          return res;
        };
      
        const getTask = async () => {
          if (!id) {
            // ID n'est pas défini, sortir de l'effet
            return;
          }
      
          const theTask = await retrieveTask();
          if (theTask) {
            setTask(theTask);
            setIsLoading(false);
          }
        };
      
        getTask();
      }, [id]);

      useEffect(() => {}, [task]);

      const taskStatus = (isComplete) => {
        if (isComplete) {
            return (
                <button type="button" class="btn btn-success">Tâche effectuée</button>
            )
        } else {
            return (
                <button type="button" class="btn btn-danger">Tâche non effectuée</button>
            )
        }
      }

    

    return (
        <div>
            <Navigation />
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Tache numéro {task.id}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{taskStatus(task.complete)}</h6>
                <p className="card-text">{task.label}</p>
            </div>
            </div>
            

        </div>

    );
};

export default Detail;