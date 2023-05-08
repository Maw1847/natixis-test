import api from "./api";
import apiPatch from "./api-patch";
//import { toast } from "react-toastify";

class TaskService {

    async addTask(label, complete) {
        await api
          .post("/task", {
            label,
            complete,
          })
          .then((response) => {
            if (response.data) {
              //toast.success("Ajout réussi");
              window.location = "/tasks";
            }
          }).catch((err) => {
            if (err) {
              console.log(err);
              //toast.error("Un problème est survenu");
            }
          })
    }

    async updateTaskStatus(taskId) {
      await apiPatch.patch(`/tasks/${taskId}/status`, {}).then(async (response) => {
        if (response.data) {
          window.location = "/";
        }
      })
    }

    
}

export default new TaskService();