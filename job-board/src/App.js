import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import JobList from './components/JobList';
import JobDetail from './components/JobDetail';
import Header from './components/Header';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<JobList/>}/>
                <Route path="/job/:id" element={<JobDetail/>}/>
            </Routes>
        </div>
    );
}

export default App;