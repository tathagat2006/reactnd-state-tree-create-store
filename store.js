//we are going to build a store for redux application.
//the store has the following information.
// --------------------------------------------
//THE STATE TREE
//A WAY TO GET THE STATE TREE
//A WAY TO LISTEN AND RESPOND TO THE STATE CHANGING
//A WAY TO UPDATE THE STATE

function createStore() {

    let state = {};

    getState = () => {
        return state;
    }

    return {
        getState
    }
}