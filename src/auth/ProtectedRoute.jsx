import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);
  const { pathname } = useLocation();

  if (pathname === "/") {
    return token ? children : <Navigate to="/login" replace />;
  } else if (pathname === "/login") {
    return token ? <Navigate to="/" replace /> : children;
  }
};

export default ProtectedRoute;
