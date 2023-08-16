import { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  setEditTodo: (value: any) => void;
  setTodoList: (value: any) => void;
  selectedTodoIndex: number;
  selectedItemValue: string;
}
const EditTodoItem = ({
  setEditTodo,
  setTodoList,
  selectedTodoIndex,
  selectedItemValue,
}: Props) => {
  const [currentTodoValue, setCurrentTodoValue] = useState(selectedItemValue);

  const onEditSave = () => {
    setTodoList((prevState: any) => {
      const currentTodoList = [...prevState];
      currentTodoList[selectedTodoIndex] = currentTodoValue;
      return currentTodoList;
    });
    setEditTodo(false);
    toast("Todo updated successfully!");
  };

  return (
    <li>
      <input
        className="p-1 border-2 border-black-600 mr-2"
        type="text"
        name="todo-input-box"
        onChange={(e: any) => setCurrentTodoValue(e?.target?.value)}
        value={currentTodoValue}
      />
      <button
        type="button"
        className="bg-green-500 hover:bg-green-700
        text-white font-bold py-1 px-4 rounded mx-2"
        onClick={() => setEditTodo(false)}
        name="cancel-edit-todo"
      >
        Cancel
      </button>
      <button
        type="button"
        className="bg-red-500 hover:bg-red-700
        text-white font-bold py-1 px-4 rounded"
        onClick={onEditSave}
        name="save-edit-todo"
      >
        Save
      </button>
    </li>
  );
};

export default EditTodoItem;
