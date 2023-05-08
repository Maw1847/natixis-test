import React, { useEffect, useState, useMemo } from "react";
import Navigation from '../composants/Navigation';
import api from "../services/api";
import Loading from "../composants/Loading/Loading";
import TaskService from "../services/tasks.services";

const ListIncomplete = () => {

    const TaskStatusBadge = (isComplete) => {
        if (isComplete) {
            return (
                <div class="alert alert-success" role="alert">
                    Tâche effectuée
                </div>
            )
        } else {
            return (
                <div class="alert alert-danger" role="alert">
                    Tâche non effectuée
                </div>
            )
        }
      }


      const setData = (data) => {
        localStorage.setItem("id", data);
      };
    

    //======== API Logic ========
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const retrieveTasks = async () => {
        setIsLoading(true);
        const response = await api.get("/tasks/incomplete");
        console.log(response.data);
        let list = response.data;
        return list;
      };

      useEffect(() => {
        const getAllTasks = async () => {
          const allTasks = await retrieveTasks();
          if (allTasks) {
            setTasks(allTasks);
            setIsLoading(false);
          }
        };
    
        getAllTasks();
      }, []);

      useEffect(() => {}, [tasks]);

      const changeStatus = async (taskId) => {
            TaskService.updateTaskStatus(taskId);
      };

    const renderTable = ()=> {
        return <>
            <table className='table' >
                <thead className='thead-black' >
                    <tr>
                        <th>#</th>
                        <th>Label</th>
                        <th>Complete</th>
                        <th>...</th>
                    </tr>
                </thead>
                {isLoading ? (
                  <Loading />
                ) : (
                <tbody>
                    {tasks.map(task=>(
                        <tr>
                            <td>{task.id}</td>
                            <td>{task.label}</td>
                            <td>{TaskStatusBadge(task.complete)}</td>
                            <td>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm">
                                        <button type="button" class="btn btn-info" onClick={() => setData(task.id)}><a href="tasks/detail">Voir</a></button>
                                        
                                    </div>
                                    <div className="col-sm">
                                        <button type="button" className="btn btn-warning" onClick={() => changeStatus(task.id)}>Changer le satut</button>
                                    
                                    </div>
                                </div>
                            </div>
                            </td>
                        </tr>
                    ))}
                </tbody>)}
            </table>
        </>
    }

    return (
        <div>
            <Navigation />
            <h1 className="text-center">
                Liste des tâches à effectuer
            </h1>
            
            {tasks?.length?renderTable():null}


        </div>
    );
};

export default ListIncomplete;