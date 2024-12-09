// API FETCH
{/*The component that structures the api url to be called*/}
export const generateApiUrl = (title) => {
    {/*The web titles for movies are structured in a way that if it's two words they will be presented
     like: "Princess + Mononoke" Therefore, the encodedTitle combats this structure to ensure that when fetching the link it will
     structure the movie title in that format*/}
    const encodedTitle = encodeURIComponent(title).replace(/%20/g, '+');
    return `https://www.omdbapi.com/?t=${encodedTitle}&apikey=e304f6a2`;
};