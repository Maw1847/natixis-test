package fr.dagnon.taskapi;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
public class TaskControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testGetTasks() throws Exception {
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
        mockMvc.perform(get("/tasks/incomplete"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].label", is("Ranger la chambre")))
                .andExpect(jsonPath("$[1].label", is("Aller à la salle")));
    }

    @Test
    public void testGetTask() throws Exception {
        mockMvc.perform(get("/task/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].label", is("Ranger la chambre")));
    }


}
