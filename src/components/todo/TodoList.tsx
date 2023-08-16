import TodoItemModel from "@/src/models/todo-item";
import TodoItem from "./TodoItem";

interface Props {
  todoList: TodoItemModel[];
  setTodoList: (value: any) => void;
}

const TodoList = ({ todoList, setTodoList }: Props) => {
  if (!todoList || todoList?.length === 0) return <></>;

  return todoList?.map((itemValue: TodoItemModel, index: number) => {
    return (
      <ul
        role="list"
        className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500"
        key={`${index}_${itemValue}}`}
      >
        <TodoItem
          itemValue={itemValue as string}
          selectedTodoIndex={index}
          setTodoList={setTodoList}
        />
      </ul>
    );
  }) as any;
};

export default TodoList;
