import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export default class Thing extends React.Component {
    render() {
        return ( 
        <Draggable draggableId={this.props.thing.id} index={this.props.index}>
            {(provided) => (
                <div className="thingContainer"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                {this.props.thing.content}
                </div>
            )}
        </Draggable>
        );
    }
}