import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import withAuth from "./HOC/withAuth";

function App() {
  const EnhancedDashboard = withAuth(Dashboard);
  const EnhancedProfile = withAuth(Profile);
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<EnhancedDashboard />} />
        <Route path="/profile" element={<EnhancedProfile />} />
        <Route
          path="/"
          element={
            <div>
              <h1>Higher Order Component</h1>
              <p>This is Login page for unauthenticated Users</p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
