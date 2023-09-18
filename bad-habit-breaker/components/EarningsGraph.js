const EarningsGraph = ({ section, earningsSmoking, earningsDrinking }) => {
  const maxWidth = 300; // Adjust this based on your design
  let barWidth;

  if (section === "Smoking") {
    barWidth = Math.min(maxWidth, earningsSmoking);
  } else if (section === "Drinking") {
    barWidth = Math.min(maxWidth, earningsDrinking);
  }

  // Calculate the total earnings based on the section-specific earnings
  const totalEarnings = section === "Smoking" ? earningsSmoking : earningsDrinking;

  // Format the total earnings with two decimal places
  const formattedEarnings = totalEarnings.toFixed(2);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Earnings Graph</h2>
      <div className="bg-gray-300 h-8 rounded-md">
        <div
          className="bg-green-500 h-8 rounded-md"
          style={{ width: `${(barWidth / maxWidth) * 100}%` }}
        ></div>
      </div>
      <p className="mt-2">Total Earnings: ${formattedEarnings}</p>
    </div>
  );
};

export default EarningsGraph;
