package fr.dagnon.taskapi.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import fr.dagnon.taskapi.model.Task;

import java.util.List;

@Repository
public interface TaskRepository extends CrudRepository<Task, Long>{

    List<Task> findAllByCompleteIsFalse();


}
