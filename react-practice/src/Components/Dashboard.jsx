import React from "react";
import { useParams, useLocation, useSearchParams } from "react-router-dom";

const Dashboard = () => {
  const params = useParams(); // Get dynamic route params
  const location = useLocation(); // Get the full URL path
  const [searchParams] = useSearchParams(); // Get query params

  return (
    <div>
      <h2>Dashboard</h2>
      <p><strong>Current Path:</strong> {location.pathname}</p>
      <p><strong>Dynamic Params:</strong> {JSON.stringify(params)}</p>
      <p><strong>Search Params:</strong> {searchParams.toString()}</p>
    </div>
  );
};

export default Dashboard;
