import { useState, useEffect } from "react";
import { HDiv } from "../components/HDiv";
import { ToDoInputForm } from "../components/ToDoInputForm";
import { ToDoListView } from "../components/ToDoListView";
import { ToDoSummary } from "../components/ToDoSummary";


export interface ToDoItemModel {
  id: number;
  date: string;
  title: string;
  completed: boolean;
}

export const ToDoApplication = () => {
  const [todos, setTodos] = useState<ToDoItemModel[]>([]);
  const [counts, setCounts] = useState({ done: 0, pending: 0, overdue: 0 });

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

  const calculateCounts = (todos: ToDoItemModel[]) => {
    const now = new Date().toISOString().split('T')[0]; 
    let done = 0, pending = 0, overdue = 0;
  
    todos.forEach(todo => {
      if (todo.completed) {
        done++;
      } else if (todo.date < now) {
        overdue++;
      } else {
        pending++;
      }
    });
  
    return { done, pending, overdue };
  };

  useEffect(() => {
    setCounts(calculateCounts(todos));
  }, [todos]);


  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
      <ToDoSummary done={counts.done} pending={counts.pending} overdue={counts.overdue} />
    </div>
  );

}