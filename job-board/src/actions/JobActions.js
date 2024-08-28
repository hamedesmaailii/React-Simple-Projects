import axios from 'axios';

const API_URL = 'https://jobs.github.com/positions.json';

export const fetchJobs = async (searchTerm = '', location = '', fullTime = false) => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                description: searchTerm,
                location: location,
                full_time: fullTime,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching jobs:', error);
        throw error;
    }
};

export const fetchJobDetails = async (jobId) => {
    try {
        const response = await axios.get(`${API_URL}?id=${jobId}`);
        return response.data
    } catch (error) {
        console.error('Error fetching job detail:', error);
        throw error;
    }
};