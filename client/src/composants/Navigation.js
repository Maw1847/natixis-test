import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/navigation.css'

const Navigation = () => {
  return (
    <div className="row nav">
            <div className="col-sm-2">
                <NavLink exact to='/' >
                    Accueil
                </NavLink>
            </div>
            <div className="col-sm-2">
                <NavLink exact to='/tasks' >
                    Liste de toutes les tâches
                </NavLink>
            </div>
            <div className="col-sm-2">
                <NavLink exact to='/tasks/incomplete' >
                    Liste des tâches à effectuer
                </NavLink>
            </div>
            <div className="col-sm-2">
                <NavLink exact to='/tasks/add' >
                    Ajouter une tâche
                </NavLink>
            </div>
        </div>
  );
};

export default Navigation;
