import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>

      <h2>Welcome {user?.name}</h2>
    </div>
  );
}

export default Dashboard;