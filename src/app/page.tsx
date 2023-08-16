"use client";
import { useState } from "react";
import TodoList from "../components/todo/TodoList";
import toast, { Toaster } from "react-hot-toast";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onTodoAddClick = () => {
    setTodoList((prevValue: any) => {
      prevValue?.push(todo);
      return prevValue;
    });
    setTodo("");
    toast("Todo created successfully!");
  };

  return (
    <div className="container mx-auto">
      <h1 className="font-bold mb-3 mt-5">Welcome to the Todo app</h1>
      <br />
      <input
        className="p-2 border-2 border-rose-600 mr-2 mb-5"
        type="text"
        name="todo-input-box"
        onChange={(e: any) => setTodo(e?.target?.value)}
        value={todo}
      />
      <button
        type="button"
        name="todo-add"
        className={`${
          todo?.length < 3 ? "bg-gray-700" : "bg-blue-500 hover:bg-blue-700 "
        } text-white font-bold py-2 px-4 rounded`}
        onClick={onTodoAddClick}
        disabled={todo?.length < 3}
      >
        Add
      </button>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <Toaster />
    </div>
  );
};

export default Todo;
