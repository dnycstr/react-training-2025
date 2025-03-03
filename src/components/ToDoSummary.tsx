import React from 'react';
import '../App.css';


interface ToDoSummaryProps {
  done: number;
  pending: number;
  overdue: number;
}

export const ToDoSummary: React.FC<ToDoSummaryProps> = ({ done, pending, overdue }) => {
  return (
    <div className="todosummary-container">
      <h2>Summary</h2>
      <p> Done: <span className="circle done">{done}</span></p>
      <p> Pending: <span className="circle pending">{pending}</span></p>
      <p> Overdue: <span className="circle overdue">{overdue}</span></p>
    </div>
  );
};