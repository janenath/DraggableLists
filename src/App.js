import React from 'react';

import Selected from './components/Selected';
import Unselected from './components/Unselected';
import Item from './components/Item';
import Undo from './components/Undo';
import Redo from './components/Redo';

function App() {
  return (
    <div className="App">
        <div className="Container">
            <Unselected />    
            <Selected />
        </div>
        <div className="buttonContainer">
          <Undo />
          <Redo />
        </div>
    </div>
  );
}

export default App;
