import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import './main.scss';

import Column from './components/Column';

import data from './data';

class App extends React.Component {
  state = data;

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish){
      const newThingIds = Array.from(start.thingIds);
      newThingIds.splice(source.index, 1);
      newThingIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        thingIds: newThingIds
      };
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      }
      this.setState(newState);
      return;
    }

    const startThingIds = Array.from(start.thingIds);
    startThingIds.splice(source.index, 1);
    const newStart = {
      ...start,
      thingIds: startThingIds
    }
    const finishThingIds = Array.from(finish.thingIds);
    finishThingIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      thingIds: finishThingIds
    }
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }
    this.setState(newState);
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


