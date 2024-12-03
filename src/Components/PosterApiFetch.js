export const generateApiUrl = (title) => {
    const encodedTitle = encodeURIComponent(title).replace(/%20/g, '+');
    return `http://img.omdbapi.com/?t=${encodedTitle}&apikey=e304f6a2`;
};