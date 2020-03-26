import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import './main.scss';

import Column from './components/Column';

import data from './data';

class App extends React.Component {
  state = data;

  onDragEnd = result => {
    console.log(this.state)
  }

  render(){
    return(
      <div className="App">
        <DragDropContext onDragEnd={this.onDragEnd}>
          {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const things = column.thingIds.map(thingId => this.state.things[thingId]);
      
            return <Column key={column.id} column={column} things={things} />
          })}
        </DragDropContext>
      </div>
    ) 
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);


