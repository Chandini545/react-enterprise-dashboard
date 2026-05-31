import StatsCard from "../components/StatsCard";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <StatsCard title="Employees" value="120" />
        <StatsCard title="Revenue" value="$45K" />
        <StatsCard title="Projects" value="18" />
      </div>
    </div>
  );
};

export default Dashboard;