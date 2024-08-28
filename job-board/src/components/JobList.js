import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Filter from './Filter';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const fetchJobs = async () => {
            const response = await axios.get('https://jobs.github.com/positions.json?description=developer');
            setJobs(response.data);
        };
        fetchJobs();
    }, []);

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filter ? job.type.toLowerCase() === filter.toLowerCase() : true)
    );

    return (
        <div>
            <SearchBar setSearchTerm={setSearchTerm} />
            <Filter setFilter={setFilter} />
            <ul>
                {filteredJobs.map(job => (
                    <li key={job.id}>
                        <Link to={`/job/${job.id}`}>{job.title} - {job.location}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobList;