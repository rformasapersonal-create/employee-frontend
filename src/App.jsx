import Login from "./components/Login";
import axios from "axios";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://127.0.0.1:8000/api/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.removeItem("token");
      localStorage.removeItem("user");

      window.location.reload();
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome, {user.name}!</h2>
          <p>{user.email}</p>

          <button onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;