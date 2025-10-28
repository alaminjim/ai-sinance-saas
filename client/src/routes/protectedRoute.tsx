import { useTypedSelector } from "@/app/hook";
import { Navigate, Outlet } from "react-router-dom";
import { AUTH_ROUTES } from "./common/routePath";

const ProtectedRoute = () => {
  const { accessToken, user } = useTypedSelector((state) => state.auth);

  // Loading during Redux Persist restore
  if (accessToken === undefined && user === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Loading...
      </div>
    );
  }

  if (accessToken && user) return <Outlet />;

  return <Navigate to={AUTH_ROUTES.SIGN_IN} replace />;
};

export default ProtectedRoute;
