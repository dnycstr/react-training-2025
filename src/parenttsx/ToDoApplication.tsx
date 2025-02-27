import { useState } from "react";
import { HDiv } from "../components/HDiv";
import { ToDoInputForm } from "../components/ToDoInputForm";
import { ToDoListView } from "../components/ToDoListView";

export interface ToDoItemModel {
  id: number;
  date: string;
  title: string;
  completed: boolean;
}

export const ToDoApplication = () => {
  const [todos, setTodos] = useState<ToDoItemModel[]>([]);

  const handleNewTodoItem = (newtodo: ToDoItemModel) => {
    newtodo.id = todos.length + 1;
    setTodos([...todos, newtodo]);
  };

  const handleOnComplete = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = true;
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>ToDo Application</h1>
      <HDiv>
        <ToDoInputForm
          onNewToDo={(todo: ToDoItemModel) => {
            handleNewTodoItem(todo);
          }}
        />
        <ToDoListView
          listOfTodos={todos}
          onComplete={(id: number) => handleOnComplete(id)}
        />
      </HDiv>
    </div>
  );
};
