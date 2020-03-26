import React from 'react';

function App() {
  return (
    <div className="App">
        <div className="Container">
          <div className="listContainer">
            <h2>Unselected</h2>
            <div className="Unselected">
            </div>
          </div>
          <div className="listContainer">
            <h2>Selected</h2>
            <div className="Selected">
            </div>
          </div>
        </div>
        <div className="buttonContainer">
          <button>Undo</button>
          <button>Redo</button>
        </div>
    </div>
  );
}

export default App;
