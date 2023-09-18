import React, { useState } from 'react';

const HabitGrid = ({ section, updateEarnings }) => {
  const totalSquares = 60; // Total number of squares
  const [habits, setHabits] = useState(Array(totalSquares).fill(false));
  const [message, setMessage] = useState('');

  const toggleDay = (index) => {
    console.log("toggleDay called"); // Add this line for debugging
    const updatedHabits = [...habits];
    updatedHabits[index] = !updatedHabits[index];
    setHabits(updatedHabits);

    const clickedCount = updatedHabits.filter(Boolean).length;

    const earningsPerClick = 25.0;
    const totalEarnings = clickedCount * earningsPerClick;

    updateEarnings(totalEarnings); // Call the callback to update earnings in Home component

    if (clickedCount >= 60) {
      setMessage("You did it! You have changed your life for the better! 🏆");
    } else if (clickedCount >= 50) {
      setMessage("Not long now, you got this in the bag! 🎖️");
    } else if (clickedCount >= 40) {
      setMessage("You are a disciplined legend! 🏅");
    } else if (clickedCount >= 30) {
      setMessage("Hide all your bad habits because you are killin' this! 🥇");
    } else if (clickedCount >= 20) {
      setMessage("Nice work, you have the discipline of a samurai! 🥈");
    } else if (clickedCount >= 10) {
      setMessage("Wow, you are smashing this out of the park! 🥉");
    } else if (clickedCount >= 1) {
      setMessage("Well done, keep up the great work! 🔥");
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
