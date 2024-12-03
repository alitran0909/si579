import React from 'react';
import headerGif from '/workspaces/si579/src/ghibli.gif'; // Import your GIF
import sGif from '/workspaces/si579/src/spirtedawaywalk.gif'
import princess from '/workspaces/si579/src/princesswalking.gif'
import howl from '/workspaces/si579/src/howlswalking.gif'
import ponyo from '/workspaces/si579/src/ponyorunning.gif'


function App() {
  return (
    <div>
     <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
        <h1 style={{ margin: 0 }}>Studio Ghibli Films</h1>
        <img src={headerGif} alt="Header Animation" style={{ width: '150px', height: 'auto', margin: '10px' }} />
        <img src={sGif} alt="Spirited Away Walk" className="gif" style={{ width: '150px', height: 'auto', margin: '10px' }} />
        <img src={princess} alt="Princess Walking" className="gif" style={{ width: '150px', height: 'auto', margin: '10px' }} />
        <img src={howl} alt="Howl's Walking" className="gif" style={{ width: '150px', height: 'auto', margin: '10px' }} />
        <img src={ponyo} alt="Ponyo Running" className="gif" style={{ width: '150px', height: 'auto', margin: '10px' }} />
      </header>
    </div>
  );
}

export default App;