import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../../apis/todosApi";
import { v4 as uuid } from "uuid";
const TodosList = () => {
  const [newTodo, setNewTodo] = useState("");
  const queryClient = useQueryClient();
  const {
    data: todos,
    isLoading,
    isError,
    error,
  } = useQuery("todos", getTodos, {
    select: (data) => data.sort((a, b) => b.id - a.id),
  });
  const addTodoMutate = useMutation(addTodo, {
    onSuccess: () => {
      // Invalid the cache and refetch the data
      queryClient.invalidateQueries("todos");
    },
  });
  const updateTodoMutate = useMutation(updateTodo, {
    onSuccess: () => {
      // Invalid the cache and refetch the data
      queryClient.invalidateQueries("todos");
    },
  });
  const deleteTodoMutate = useMutation(deleteTodo, {
    onSuccess: () => {
      // Invalid the cache and refetch the data
      queryClient.invalidateQueries("todos");
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoMutate.mutate({
      id: uuid(),
      text: newTodo,
      completed: false,
      edit: false,
    });
    setNewTodo("");
  };
  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isError) {
    content = <div>{error.message}</div>;
  } else {
    content = todos.map((todo) => {
      return (
        <article key={todo.id}>
          <div className='todo'>
            <input
              type='checkbox'
              checked={todo.completed}
              id={todo.id}
              onChange={() =>
                updateTodoMutate.mutate({
                  ...todo,
                  completed: !todo.completed,
                })
              }
            />
            <label htmlFor={todo.id}>{todo.text}</label>
          </div>
          <button
            className='trash'
            onClick={() => deleteTodoMutate.mutate({ id: todo.id })}
          >
            Delete
          </button>
        </article>
      );
    });
  }
  const newItems = (
    <form onSubmit={handleSubmit}>
      <label htmlFor='new-todo'>Enter a new todo item</label>
      <div className='new-todo'>
        <input
          type='text'
          id='new-todo'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder='Enter new todo'
        />
      </div>
      <button className='submit'>Create</button>
    </form>
  );
  return (
    <main>
      <h1>Todo List</h1>
      {newItems}
      {content}
    </main>
  );
};

export default TodosList;
