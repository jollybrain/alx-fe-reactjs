import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders the TodoList component', () => {
  render(<App />);
  
  // Check if the TodoList is rendered by checking for a known text
  expect(screen.getByText('Todo List')).toBeInTheDocument();
});

test('adds a new todo item', () => {
  render(<App />);
  
  // Find the input field and type a new todo
  fireEvent.change(screen.getByPlaceholderText('Add a todo'), {
    target: { value: 'Test new todo' },
  });

  // Simulate a form submit by clicking the Add Todo button
  fireEvent.click(screen.getByText('Add Todo'));

  // Verify the new todo has been added to the list
  expect(screen.getByText('Test new todo')).toBeInTheDocument();
});

test('toggles todo completion status', () => {
  render(<App />);
  
  const todoItem = screen.getByText('Learn React');
  
  // Click the todo item to mark it as completed
  fireEvent.click(todoItem);
  
  // Check if the text-decoration changes to line-through
  expect(todoItem).toHaveStyle('text-decoration: line-through');

  // Click it again to toggle back to not completed
  fireEvent.click(todoItem);
  
  // Verify the text-decoration is removed
  expect(todoItem).toHaveStyle('text-decoration: none');
});

test('deletes a todo item', () => {
  render(<App />);
  
  // Click on the "Delete" button for the first todo item
  fireEvent.click(screen.getByText('Delete', { selector: 'button' }));
  
  // Verify that the todo is no longer in the document
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
