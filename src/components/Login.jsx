import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleLogin = async () => {
    try {
        const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        {
            email,
            password,
        }
        );

        console.log(response.data);

        // Save the token
        localStorage.setItem("token", response.data.token);

        // Save the logged-in user
        localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
        );

    } catch (error) {
        console.error(error.response.data);
    }
    };

  return (
    <div>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;