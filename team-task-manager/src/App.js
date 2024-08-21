import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import UserManagement from "./components/UserManagement";
import CalendarView from "./components/CalendarView";

const App = () => {
    return (
        <Router>
            <div className="App">
                <header>
                    <h1>Team Task Manager</h1>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/users">User Management</Link></li>
                            <li><Link to="/calendar">Calendar</Link></li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />}/>
                    <Route path="/profile" element={<Profile />}/>
                    <Route path="/users" element={<UserManagement />}/>
                    <Route path="/calender" element={<CalendarView tasks={[]} />}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;