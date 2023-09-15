import React, { useState } from 'react';

const HabitGrid = () => {
  const [habits, setHabits] = useState(Array(60).fill(false));
  const [message, setMessage] = useState('');

  const toggleDay = (index) => {
    const updatedHabits = [...habits];
    updatedHabits[index] = !updatedHabits[index];
    setHabits(updatedHabits);

    if (updatedHabits[index]) {
      setMessage('Nice work, keep it up!');
    } else {
      setMessage('');
    }
  };

  return (
    <div className="flex flex-wrap">
      {habits.map((completed, index) => (
        <div
          key={index}
          onClick={() => toggleDay(index)}
          className={`w-4 h-4 rounded-md cursor-pointer my-1 mx-1 ${
            completed ? 'bg-green-400' : 'bg-red-400'
          }`}
        />
      ))}
      <div className="w-full text-center text-green-600 mt-2">{message}</div>
    </div>
  );
};

export default HabitGrid;
