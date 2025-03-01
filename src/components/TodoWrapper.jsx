import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";

function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  // this is to add todo
  const addTodo = (todo) => {setTodos([...todos,{ id: uuidv4(), task: todo, completed: false, isEditing: false },])}

  //this is to delete todo
  const deleteTodo =(id)=> setTodos(todos.filter((todo) => todo.id !== id));

  // this is to toggle complete
  const toggleComplete = (id) => {setTodos(todos.map((todo)=>todo.id === id ? { ...todo, completed: !todo.completed } : todo))}

  // this is to edit todo
  const editTodo =(id)=> {setTodos(todos.map((todo)=> todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo ))}

  // this is to edit task
  const editTask=(task,id) =>{setTodos(todos.map((todo) =>todo.id === id ? {...todo, task , isEditing: !todo.isEditing } :todo))}
  return (
    <div className="TodoWrapper">
      <h1>Add Your Tasks Here 😌</h1>
      <TodoForm addTodo={addTodo} />

      {/* display todo list here :) */}
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm
            key={todo.id}
            editTask={editTask}
            task={todo}
          />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
}

export default TodoWrapper;
