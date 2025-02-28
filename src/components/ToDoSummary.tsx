import React from 'react';

interface ToDoSummaryProps {
  done: number;
  pending: number;
  overdue: number;
}

export const ToDoSummary: React.FC<ToDoSummaryProps> = ({ done, pending, overdue }) => {
  return (
    <div className="todosummary-container">
      <h2>Summary</h2>
      <p>Done: {done}</p>
      <p>Pending: {pending}</p>
      <p>Overdue: {overdue}</p>
    </div>
  );
};