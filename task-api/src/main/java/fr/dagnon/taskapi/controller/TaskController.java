package fr.dagnon.taskapi.controller;

import java.util.Optional;

import fr.dagnon.taskapi.cors.CorsConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Import;
import org.springframework.web.bind.annotation.*;

import fr.dagnon.taskapi.model.Task;
import fr.dagnon.taskapi.service.TaskService;

@RestController
@Import(CorsConfiguration.class)
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping("/tasks")
    public Iterable<Task> getTasks(){
        return taskService.getTasks();
    }

    @GetMapping("/tasks/incomplete")
    public Iterable<Task> getTasksToComplete(){
        return taskService.getTasksToComplete();
    }

    @GetMapping("/tasks/{id}")
    public Task getTask(@PathVariable("id") final Long id){
        Optional<Task> task = taskService.getTask(id);
        if (task.isPresent()){
            return task.get();
        }
        else {
            return null;
        }
    }

    @PostMapping("/task")
    public Task addTask(@RequestBody Task task){
        return taskService.addTask(task);
    }

    @PatchMapping("/tasks/{id}/status")
    public void updateTaskStatus(@PathVariable("id") final Long id) {
        taskService.updateTaskStatus(id);
    }

}
