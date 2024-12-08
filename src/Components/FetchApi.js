// API FETCH
export const generateApiUrl = (title) => {
    apikey = process.env.REACT_APP_API_KEY
    const encodedTitle = encodeURIComponent(title).replace(/%20/g, '+');
    return `https://www.omdbapi.com/?t=${encodedTitle}&${apikey}`;
};