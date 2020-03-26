import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import './main.scss';

import Column from './components/Column';

import data from './data';

class App extends React.Component {
  state = data;

  logState = (e) => {
    console.log(this.state)
  }

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    //if thing isn't dropped in a droppable destination, return
    if (!destination) {
      return;
    }

    //if thing is dropped into to its current destination, return
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const start = this.state.columns[source.droppableId]; //source column
    const finish = this.state.columns[destination.droppableId]; //destination column

    if (start === finish){ //if thing is dropped into a different position in the same column
      const newThingIds = Array.from(start.thingIds);
      newThingIds.splice(source.index, 1); //splice thing from its current index and into its destination index
      newThingIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        thingIds: newThingIds //replace column's thing array with new array
      };
      const newState = { //create new state to reflect updated column
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      }
      this.setState(newState); //set state to new state
      return;
    }

    //if thing is dropped into different column:
    const startThingIds = Array.from(start.thingIds);
    startThingIds.splice(source.index, 1); //remove thing from source column
    const newStart = { //create new source column to reflect changes
      ...start,
      thingIds: startThingIds
    }
    const finishThingIds = Array.from(finish.thingIds);
    finishThingIds.splice(destination.index, 0, draggableId); //add thing to destination column
    const newFinish = { //create new destination column to reflect changes
      ...finish,
      thingIds: finishThingIds
    }
    const newState = { //create new state to reflect updated columns
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }
    this.setState(newState); //set state to new state
  }

  render(){
    return(
      <div className="appContainer">
        <div className="dragContainer">
          <DragDropContext onDragEnd={this.onDragEnd}>
            {this.state.columnOrder.map(columnId => {
              const column = this.state.columns[columnId];
              const things = column.thingIds.map(thingId => this.state.things[thingId]);
              return <Column key={column.id} column={column} things={things} />
            })}
          </DragDropContext>
        </div>
        <div className="logState" onClick={this.logState}>Log State</div>
      </div>
    ) 
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);


