import TodoItem from "@/src/models/todo-item";
import { useState } from "react";
import EditTodoItem from "./EditTodoItem";
import toast from "react-hot-toast";

const TodoItem = ({ itemValue, selectedTodoIndex, setTodoList }: any) => {
  const [isEditTodo, setEditTodo] = useState(false);

  // Edit Todo view
  if (isEditTodo)
    return (
      <EditTodoItem
        setEditTodo={setEditTodo}
        setTodoList={setTodoList}
        selectedTodoIndex={selectedTodoIndex}
        selectedItemValue={itemValue}
      />
    );

  const onDeleteTodoClick = () => {
    setTodoList((prevState: any) => {
      const currentTodoList = [...prevState];
      toast("Todo deleted successfully!");
      return currentTodoList.filter(
        (item: TodoItem, index: number) => index !== selectedTodoIndex
      );
    });
  };

  return (
    <li>
      <div className="grid grid-cols-3 gap-4 mb-2">
        <span className="font-bold col-start-1">{itemValue}</span>
        <button
          type="button"
          className="bg-green-500 hover:bg-green-700
        text-white font-bold py-1 rounded mx-2 col-start-2"
          onClick={() => setEditTodo((prevState) => !prevState)}
          name="edit-todo"
        >
          Edit
        </button>
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700
        text-white font-bold py-1 rounded col-start-3"
          onClick={onDeleteTodoClick}
          name="delete-todo"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
