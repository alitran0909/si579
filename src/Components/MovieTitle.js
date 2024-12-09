import React from 'react';
import headerGif from '/workspaces/si579/src/ghibli.gif';
import sGif from '/workspaces/si579/src/spirtedawaywalk.gif';
import princess from '/workspaces/si579/src/princesswalking.gif';
import howl from '/workspaces/si579/src/howlswalking.gif';
import ponyo from '/workspaces/si579/src/ponyorunning.gif';
import kiki from '/workspaces/si579/src/kikiflying.gif';

/**
 * App component that displays a header with Studio Ghibli film animations.
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <div>
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '20px' 
      }}>
        <h1 style={{ margin: 0 }}>Studio Ghibli Films</h1>
        
        {/* Styles the header according to the desired margins */}
        <img 
          src={headerGif} 
          alt="Header Animation" 
          style={{ width: '150px', height: 'auto', margin: '10px' }} 
        />
        
        {/* Spirited Away GIF */}
        <img 
          src={sGif} 
          alt="Spirited Away Walk" 
          className="gif" 
          style={{ width: '150px', height: 'auto', margin: '10px' }} 
        />
        
        {/* Princess Mononoke GIF */}
        <img 
          src={princess} 
          alt="Princess Walking" 
          className="gif" 
          style={{ width: '150px', height: 'auto', margin: '10px' }} 
        />
        
        {/* Howl's Moving Castle GIF */}
        <img 
          src={howl} 
          alt="Howl's Walking" 
          className="gif" 
          style={{ width: '150px', height: 'auto', margin: '10px' }} 
        />
        
        {/* Kiki's Delivery Service GIF */}
        <img 
          src={kiki} 
          alt="Kiki Flying" 
          className="gif" 
          style={{ width: '150px', height: 'auto', margin: '10px' }} 
        />
        
        {/* Ponyo GIF */}
        <img 
          src={ponyo} 
          alt="Ponyo Running" 
          className="gif" 
          style={{ width: '150px', height: 'auto', margin: '10px' }} 
        />
      </header>
    </div>
  );
}

export default App;