import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Thing from './Thing';

export default class Column extends React.Component {
    render() {
        return (
            <div className="columnContainer">
                <h2>{this.props.column.title}</h2>
                <Droppable droppableId={this.props.column.id}>
                    {(provided) => (
                        <div className="column" 
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {this.props.things.map((thing, index) => 
                                <Thing key={thing.id} thing={thing} index={index}/>
                            )}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        )   
    }
}