import { ToDoItemModel } from "../parenttsx/ToDoApplication";
import { ToDoItem } from "./ToDoItem";

interface ToDoListViewProps {
  listOfTodos: ToDoItemModel[];
  onComplete: (id: number) => void;
}

export const ToDoListView: React.FC<ToDoListViewProps> = ({
  listOfTodos,
  onComplete,
}) => {
  return (
    <div className="todo-container">
      <h1>ToDo List View</h1>
      <div>
        {listOfTodos.map((todo, index) => (
          <ToDoItem
            key={index + 1}
            id={todo.id}
            title={todo.title}
            isCompleted={todo.completed}
            date={todo.date}
            onComplete={onComplete}
          />
        ))}
      </div>
    </div>
  );
};
