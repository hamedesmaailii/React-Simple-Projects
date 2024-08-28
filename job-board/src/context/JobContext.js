import React, {createContext, useReducer} from 'react';
import jobReducer from '../reducers/jobReducer';

const initialState = {
    jobs: [],
    searchTerm: '',
    filter: ''
};

export const JobContext = createContext(initialState);

export const JobProvider = ({children}) => {
    const [state, dispatch] = useReducer(jobReducer, initialState);

    return (
        <JobContext.Provider value={{
            jobs: state.jobs,
            searchTerm: state.searchTerm,
            filter: state.filter,
            dispatch
        }}>
            {children}
        </JobContext.Provider>
    );
};