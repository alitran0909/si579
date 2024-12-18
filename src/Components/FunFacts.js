import React, { useState, useEffect } from 'react';

/**
 * The component that allows users to click through various fun facts from the API
 * @param {Object} props - The component props
 * @param {string} props.url - The URL to fetch fun facts data
 * @returns {JSX.Element} The rendered FunFacts component
 */
const FunFacts = ({ url }) => {
    const [factData, setFactData] = useState(null);
    // Starts off displaying the Award fun fact always
    const [currentDisplay, setCurrentDisplay] = useState('awards');
    const [error, setError] = useState(null);

    // Fetches API within this component
    useEffect(() => {
        /**
         * Fetches fun facts data from the API
         * @async
         */
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setFactData(data);
            } catch (err) {
                console.error("Error fetching movie data:", err);
                setError("Failed to fetch movie data. Please try again.");
            }
        };

        fetchData();
    }, [url]);

    /**
     * Function allows for the various facts to be cycled through when the user clicks the button
     */
    const cycleDisplay = () => {
        setCurrentDisplay(current => {
            // The cases that are allowed for the user click
            switch(current) {
                case 'awards': return 'language';
                case 'language': return 'country';
                case 'country': return 'awards';
                default: return 'awards';
            }
        });
    };

    /**
     * Renders the current display based on the selected fact type
     * @returns {JSX.Element|null} The JSX for the current fact display or null
     */
    const renderCurrentDisplay = () => {
        // Safety check to make sure a deadend isn't being accessed
        if (!factData) return null;

        // Cycles through the various cases that are allowed
        switch(currentDisplay) {
            case 'awards':
                return (
                    <>
                        <h3>Awards</h3>
                        <p>{factData.Awards}</p>
                    </>
                );
            case 'language':
                return (
                    <>
                        <h3>Language</h3>
                        <p>{factData.Language}</p>
                    </>
                );
            case 'country':
                return (
                    <>
                        <h3>Country</h3>
                        <p>{factData.Country}</p>
                    </>
                );
            default:
                return null;
        }
    };

    if (error) {
        return <p className="error">{error}</p>;
    }

    if (!factData) {
        return <p>Loading...</p>;
    }

    // Returns the button with the proper functionality of cycling through the facts by utilizing onClick
    return (
        <div>
            <button onClick={cycleDisplay}>Show Next Information</button>
            {renderCurrentDisplay()}
        </div>
    );    
}

export default FunFacts;