const Sidebar = () => {
  return (
    <div
      style={{
        width: "240px",
        height: "100vh",
        background: "#1e293b",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>Dashboard</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ margin: "20px 0" }}>Home</li>
        <li style={{ margin: "20px 0" }}>Employees</li>
        <li style={{ margin: "20px 0" }}>Analytics</li>
        <li style={{ margin: "20px 0" }}>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;