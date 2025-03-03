import { useState } from "react";
import { ToDoItemModel } from "../parenttsx/ToDoApplication";

interface ToDoInputFormProps {
  onNewToDo: (todo: ToDoItemModel) => void;
}

export const ToDoInputForm: React.FC<ToDoInputFormProps> = ({ onNewToDo }) => {
  const [todoDate, setTodoDate] = useState("");
  const [todoTitle, setTodoTitle] = useState("");
  return (
    <div className="todo-container">
      <h1>ToDo Input Form</h1>
      <input
        type="date"
        value={todoDate}
        onChange={(e) => setTodoDate(e.target.value)}
      />
      <input
        type="text"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <button
        onClick={() => {
          const newToDo: ToDoItemModel = {
            id: 0,
            date: todoDate,
            title: todoTitle,
            completed: false,
          };
          onNewToDo(newToDo);
          setTodoDate("");
          setTodoTitle("");
        }}
      >
        Save
      </button>
    </div>
  );
};
