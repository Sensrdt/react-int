import { Navigate, useParams, useSearchParams } from "react-router-dom";

const withAuth = (Component) => {
  return (props) => {
    const isAuthenticated = localStorage.getItem("token"); // Check if the user is authenticated
    const params = useParams(); // Get URL parameters
    const [searchParams] = useSearchParams(); // Get query parameters

    return isAuthenticated ? (
      <Component {...props} params={params} searchParams={searchParams} />
    ) : (
      <Navigate to="/login" replace />
    );
  };
};

export default withAuth;
