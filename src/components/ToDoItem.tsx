interface ToDoItemProps {
  id: number;
  title: string;
  isCompleted: boolean;
  date: string;
  onComplete: (id: number) => void;
}

export const ToDoItem: React.FC<ToDoItemProps> = ({
  id,
  title,
  isCompleted,
  date,
  onComplete,
}) => {
  const isOverdue = new Date(date) < new Date();
  return (
    <div className="todo-item-container">
      <span className={isCompleted ? "todo-complete" : ""}>{title}</span>
      <button
        className={
          isCompleted
            ? "todo-item-complete"
            : isOverdue
            ? "todo-item-overdue"
            : "todo-item-open"  
        }
        onClick={() => {
          onComplete(id);
        }}
      ></button>
    </div>
  );
};
