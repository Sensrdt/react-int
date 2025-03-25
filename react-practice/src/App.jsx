import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import withAuth from "./HOC/withAuth";
import Dashboard from "./Components/Dashboard";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import './App.css';

const ProtectedDashboard = withAuth(Dashboard);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/landing" />} />

        {/* Correct dynamic route */}
        <Route path="/dashboard/:param1" element={<ProtectedDashboard />} />

        <Route path="/login" element={<Login />} />

        <Route path="/landing" element={<Landing/>} />

        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
