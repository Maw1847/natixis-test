package fr.dagnon.taskapi.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import fr.dagnon.taskapi.model.Task;
import fr.dagnon.taskapi.repository.TaskRepository;

import lombok.Data;

@Data
@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    /**
     * Récupérer la liste de toutes les tâches
     * */
    public Iterable<Task> getTasks() {
        return taskRepository.findAll();
    }

    /**
     * Récupérer les tâches à effectuer
     * */
    public Iterable<Task> getTasksToComplete() {
        return taskRepository.findAllByCompleteIsFalse();
    }

    /**
     * Récupérer une tâche par son ID
     * */
    public Optional<Task> getTask(final Long id){
        return taskRepository.findById(id);
    }

    /**
     * Ajouter des tâches
     * */
    public Task addTask(Task task){
        return taskRepository.save(task);
    }

    /**
     * Changer le statut d'une tâche
     * */
    public void updateTaskStatus(Long taskId) {
        Optional<Task> optionalTask = taskRepository.findById(taskId);
        if (optionalTask.isPresent()) {
            Task task = optionalTask.get();
            task.setComplete(!task.isComplete());
            taskRepository.save(task);
        }
    }

}
