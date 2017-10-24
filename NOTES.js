// Redux 
    // an Action --> Store --> Reducer --> State
    // Action: an object that tells the reducer how to change its data
    // Store: an object that holds the application's data (Reducer and State live here)
    // Reducer: a function that returns some data
    // State: data for our app to use 

// by default, when we create a Redux store, it creates a state on the application
// whatever the reducer returns is our applicaiton state 

// actions give us the ability to modify state in a very particular, finite way

// always called to an initial state and an action

    const reducer = (state = [], action) => {
        if (action.type === 'split_string') {
            return action.payload.split('');
        }
        return state;
    };

    const store = Redux.createStore(reducer);

    store.getState();

    const action = {
        type: 'split_string',
        payload: 'asdf'
    };

    store.dispatch(action);

// Actions
    // required to have a 'type' - specific command or instruction
    // a 'payload' tells our action what to affect - the piece of data we want to work on
    // tell our reducers to update in a specific fashion
