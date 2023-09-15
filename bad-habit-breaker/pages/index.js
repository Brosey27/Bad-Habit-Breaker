import React from "react";
import HabitGrid from "../components/HabitGrid";

const Home = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Habit Tracker</h1>
      <HabitGrid />
    </div>
  );
};

export default Home;
