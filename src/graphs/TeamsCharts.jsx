import {
  PieChart,
  Pie,
  Cell,
  Label,
  ResponsiveContainer,
} from "recharts";

import '../index.css'

const TeamsCharts = () => {
  const chartData = {
    warningSteps: 0,
    totalFeatures: 3,
    failedFeatures: 1,
    totalScenarios: 10,
    passedScenarios: 7,
    totalSteps: 96,
    infoSteps: 0,
    failedScenarios: 10,
    passedFeatures: 1,
    skippedSteps: 10,
    passedSteps: 50,
    failedSteps: 4,
  };

  const passStepsPercentage = (
    (chartData.passedSteps / chartData.totalSteps) *
    100
  ).toFixed(2);
  const passFeature = (
    (chartData.passedFeatures / chartData.totalFeatures) *
    100
  ).toFixed(2);
  const passScenariosPercentage = (
    (chartData.passedScenarios / chartData.totalScenarios) *
    100
  ).toFixed(2);

  const StepsData = [
    { name: "Passed", value: chartData.passedSteps },
    { name: "Failed", value: chartData.failedSteps },
    { name: "Skipped", value: chartData.skippedSteps },
  ];

  const FeatureData = [
    { name: "Passed", value: chartData.passedFeatures },
    { name: "Failed", value: chartData.totalFeatures },
  ];

  const ScenariosData = [
    { name: "Passed", value: chartData.passedScenarios },
    { name: "Failed", value: chartData.totalScenarios },
  ];

  const COLORS = ["#28a745", "#dc3545", "#ffc107"];

  return (
    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: "20px" }}>
      {/* Feature Chart */}
      <div style={{ textAlign: "center" }}>
        <ResponsiveContainer width={200} height={200}>
          <PieChart>
            <Pie
              data={FeatureData}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={90}
              paddingAngle={5}
              dataKey="value"
              stroke="none" 
            >
              {FeatureData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
              <Label
                value={`${passFeature}%`}
                position="center"
                fontSize="28px"
                fill="rgb(124, 255, 146)"
                style={{ fontWeight: "bold" }}
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <small>Feature Pass Percentage</small>
      </div>

      {/* Scenarios Chart */}
      <div style={{ textAlign: "center" }}>
        <ResponsiveContainer width={200} height={200}>
          <PieChart>
            <Pie
              data={ScenariosData}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={90}
              paddingAngle={5}
              dataKey="value"
              stroke="none" 
            >
              {ScenariosData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
              <Label
                value={`${passScenariosPercentage}%`}
                position="center"
                fontSize="28px"
                fill="rgb(124, 255, 146)"
                style={{ fontWeight: "bold" }}
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <small>Scenarios Pass Percentage</small>
      </div>

      {/* Steps Chart */}
      <div style={{ textAlign: "center" }}>
        <ResponsiveContainer width={200} height={200}>
          <PieChart>
            <Pie
              data={StepsData}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={90}
              paddingAngle={5}
              dataKey="value"
              stroke="none" 
            >
              {StepsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
              <Label
                value={`${passStepsPercentage}%`}
                position="center"
                fontSize="28px"
                fill="rgb(124, 255, 146)"
                style={{ fontWeight: "bold" }}
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <small>Steps Pass Percentage</small>
      </div>
    </div>
  );
};

export default TeamsCharts;
