import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByRole("button", { name: /add/i });

    // Simulate adding a new todo
    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    // Check if the new todo is added to the list
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    // Initially, it should not have a line-through style
    expect(todo).not.toHaveStyle("text-decoration: line-through");

    // Simulate toggle by clicking on the todo
    fireEvent.click(todo);

    // After toggling, it should have a line-through style
    expect(todo).toHaveStyle("text-decoration: line-through");

    // Toggle back to not completed
    fireEvent.click(todo);
    expect(todo).not.toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    const deleteButton = screen.getByRole("button", { name: /delete/i });

    // Simulate deleting the todo
    fireEvent.click(deleteButton);

    // Check if the todo is removed
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
