const EarningsGraph = ({ section, earningsSmoking, earningsDrinking, allClicked, totalSquares }) => {
  const maxWidth = 300; // Adjust this based on your design
  let barWidth;

  // Calculate the ratio of clicked squares to total squares
  const ratio = allClicked ? 1 : totalSquares > 0 ? earningsSmoking / (totalSquares * 25) : 0;

  barWidth = maxWidth * ratio;

  // Calculate the total earnings based on the section-specific earnings
  const totalEarnings =
    section === "Smoking" ? earningsSmoking : section === "Drinking" ? earningsDrinking : 0;

  // Check if totalEarnings is a number before formatting
  const formattedEarnings =
    typeof totalEarnings === "number" ? totalEarnings.toFixed(2) : "0.00";

  // Change the label and remove the "Earnings Graph" text
  return (
    <div className="mt-4">
      <div className="bg-gray-300 h-8 rounded-md">
        <div
          className="bg-green-500 h-8 rounded-md"
          style={{ width: `${barWidth}px` }}
        ></div>
      </div>
      <p className="mt-2">Total Savings: ${formattedEarnings}</p>
    </div>
  );
};

export default EarningsGraph;
