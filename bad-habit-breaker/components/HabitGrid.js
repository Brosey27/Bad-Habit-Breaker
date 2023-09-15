import React, { useState } from 'react';

const HabitGrid = () => {
  const [habits, setHabits] = useState([
    { name: 'Habit 1', completed: false },
    { name: 'Habit 2', completed: false },
    // Add more habits as needed
  ]);

  const toggleHabit = (index) => {
    const updatedHabits = [...habits];
    updatedHabits[index].completed = !updatedHabits[index].completed;
    setHabits(updatedHabits);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {habits.map((habit, index) => (
        <div
          key={index}
          className={`p-4 rounded-md cursor-pointer ${
            habit.completed ? 'bg-green-400' : 'bg-red-400'
          }`}
          onClick={() => toggleHabit(index)}
        >
          {habit.name}
        </div>
      ))}
    </div>
  );
};

export default HabitGrid;