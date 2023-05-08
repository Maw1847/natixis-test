package fr.dagnon.taskapi;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


import fr.dagnon.taskapi.model.Task;
import fr.dagnon.taskapi.repository.TaskRepository;
import fr.dagnon.taskapi.service.TaskService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

@SpringBootTest
@AutoConfigureMockMvc
public class TaskControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    TaskRepository taskRepository;
    Task task1 = new Task();
    Task task2 = new Task();
    Task task3 = new Task();
    Task task4 = new Task();

    @BeforeEach
    void setUp() {
        taskRepository.deleteAll();

        task1.setId(1L);
        task1.setLabel("Ranger la chambre");
        task1.setComplete(false);

        task2.setId(2L);
        task2.setLabel("Faire la lessive");
        task2.setComplete(true);

        task3.setId(3L);
        task3.setLabel("Finir le projet de maths algo");
        task3.setComplete(true);

        task4.setId(4L);
        task4.setLabel("Aller à la salle");
        task4.setComplete(false);
    }

    @Test
    public void testGetTasks() throws Exception {
        taskRepository.saveAll(List.of(task1, task2, task3, task4));
        mockMvc.perform(get("/tasks"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(4)))
                .andExpect(jsonPath("$[0].label", is("Ranger la chambre")))
                .andExpect(jsonPath("$[0].complete", is(false)))
                .andExpect(jsonPath("$[1].label", is("Faire la lessive")))
                .andExpect(jsonPath("$[1].complete", is(true)));
    }

    @Test
    public void testGetTasksToComplete() throws Exception {
        taskRepository.saveAll(List.of(task1, task2, task3, task4));
        mockMvc.perform(get("/tasks/incomplete"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].label", is("Ranger la chambre")))
                .andExpect(jsonPath("$[1].label", is("Aller à la salle")));
    }

    @Test
    public void testGetTask() throws Exception {
        taskRepository.saveAll(List.of(task1, task2, task3, task4));
        mockMvc.perform(get("/tasks/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.label").value("Ranger la chambre"))
                .andExpect(jsonPath("$.complete").value(false));
    }


}
