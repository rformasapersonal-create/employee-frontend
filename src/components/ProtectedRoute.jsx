import { Navigate } from "react-router-dom";

//Prevents users from even seeing protected pages unless they’re logged in.
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;

// ProtectedRoute → “Do you have a token? If not, you’re not allowed to view this page — I’ll send you back to login.”
// ProtectedRoute keeps unauthorized users out of private pages.