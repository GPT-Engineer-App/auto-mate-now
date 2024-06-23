import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import TaskCreation from "./pages/TaskCreation.jsx";
import TaskHistory from "./pages/TaskHistory.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/task-creation" element={<TaskCreation />} />
        <Route exact path="/task-history" element={<TaskHistory />} />
      </Routes>
    </Router>
  );
}

export default App;