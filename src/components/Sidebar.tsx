import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setSelectedGoal } from '../store/calendarSlice';
import { Goal, Task } from '../types';

interface SidebarProps {
  onTaskDrag: (task: Task, goal: Goal) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onTaskDrag }) => {
  const dispatch = useDispatch();
  const { goals, selectedGoal } = useSelector((state: RootState) => state.calendar);

  const handleGoalClick = (goalId: string) => {
    dispatch(setSelectedGoal(selectedGoal === goalId ? null : goalId));
  };

  const handleDragStart = (e: React.DragEvent, task: Task, goal: Goal) => {
    e.dataTransfer.setData('task', JSON.stringify({ task, goal }));
  };

  return (
    <div className="w-64 bg-white p-4 border-r">
      <h2 className="text-xl font-bold mb-4">Goals & Tasks</h2>
      <div className="space-y-4">
        {goals.map((goal) => (
          <div key={goal.id}>
            <button
              onClick={() => handleGoalClick(goal.id)}
              className="w-full text-left font-medium p-2 rounded hover:bg-gray-100"
              style={{ color: goal.color }}
            >
              {goal.title}
            </button>
            {selectedGoal === goal.id && (
              <div className="ml-4 mt-2 space-y-2">
                {goal.tasks.map((task) => (
                  <div
                    key={task.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, task, goal)}
                    className="p-2 rounded cursor-move hover:bg-gray-50"
                    style={{ borderLeft: `4px solid ${goal.color}` }}
                  >
                    {task.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};