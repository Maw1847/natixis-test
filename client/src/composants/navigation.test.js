import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Navigation component", () => {
  test("renders four NavLink components with correct paths", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    expect(screen.getByText("Accueil")).toHaveAttribute("href", "/");
    expect(screen.getByText("Liste de toutes les tâches")).toHaveAttribute(
      "href",
      "/tasks"
    );
    expect(screen.getByText("Liste des tâches à effectuer")).toHaveAttribute(
      "href",
      "/tasks/incomplete"
    );
    expect(screen.getByText("Ajouter une tâche")).toHaveAttribute(
      "href",
      "/tasks/add"
    );
  });
});
