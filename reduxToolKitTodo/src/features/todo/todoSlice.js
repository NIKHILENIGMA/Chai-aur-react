import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        isEditing:false
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {

      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todoEdit = state.todos.find((todo) => todo.id === id);
      todoEdit ? (todoEdit.text = newText) : null;
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
//note we are importing individual method as well as whole reducers
