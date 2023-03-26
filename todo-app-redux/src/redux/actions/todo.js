import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./action-types";

// add todo action
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

// delete Todo
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: todo,
});

// update todo
export const updateTodo = (todo, id) => ({
  type: UPDATE_TODO,
  paylaod: { todo: todo, todoId: id },
});
