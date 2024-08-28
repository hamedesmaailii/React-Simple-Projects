import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const JobDetail = () => {
    const {id} = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        const fetchJob = async () => {
            const response = await axios.get('https://jobs.github.com/positions/${id}.json');
            setJob(response.data);
        };
        fetchJob();
    }, [id]);

    if(!job) return <div>Loading...</div>

    return (
        <div>
            <h1>{job.title}</h1>
            <h3>{job.location}</h3>
            <div dangerouslySetInnerHTML={{__html: job.description}} />
            <a href={job.company_url}>Company Website</a>
        </div>
    );
};

export default JobDetail;