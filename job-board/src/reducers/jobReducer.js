export default (state, action) => {
    switch (action.type) {
        case 'SET_JOBS':
            return {
                ...state,
                jobs: action.payload
            };
        case 'SET_SEARCH_TERM':
            return {
                ...state,
                searchTerm: action.payload
            };
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload
            };
        default:
            return state;
    }
};