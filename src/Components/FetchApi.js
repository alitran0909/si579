// API FETCH
export const generateApiUrl = (title) => {
    const encodedTitle = encodeURIComponent(title).replace(/%20/g, '+');
    return `https://www.omdbapi.com/?t=${encodedTitle}&apikey=16cef780`;
};