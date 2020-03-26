const data = {
    things: {
        'thing-1': {id: 'thing-1', content: 'Thing 1'},
        'thing-2': {id: 'thing-2', content: 'Thing 2'},
        'thing-3': {id: 'thing-3', content: 'Thing 3'},
        'thing-4': {id: 'thing-4', content: 'Thing 4'}
    },
    columns: {
        'unselected': {
            id: 'unselected',
            title: 'Unselected',
            thingIds: ['thing-1', 'thing-2', 'thing-3', 'thing-4']
        },
        'selected': {
            id: 'selected',
            title: 'Selected',
            thingIds: []
        }
    },
    columnOrder: ['unselected', 'selected']
};

export default data;