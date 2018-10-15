// Application data is stored outisde the app and is just referenced by the app. i.e. all the data is stored outside the ui,
// and is just referenced by the ui.
//state tree will be depicted by TRIANGLE
//main goal that Redux is trying to offer is predictable state management


//LIBRARY CODE

function createStore(reducer) {
    //The store should have four parts.
    //1.The state
    //2.Getting the state
    //3.Listen to changes on the state
    //4.Update the state


    let state 
    let listeners = []

    const subscribe = (listener) => {
        listeners.push(listener)
    }

    const getState = () => state
    
    const dispatch = function(action) {
        state = reducer(action,state)
        listeners.forEach(listener => listener())
    }

    return {
        getState,
        subscribe,
        dispatch,
    }
}

const store = createStore()

store.subscribe(() => {
    console.log('The user updated the state')
})

//APP CODE
function todos(action,state) {
    if(action.type === 'ADD_TODOS' ) {
        return state.concat(['action.todo'])
    }else if(action.type === 'REMOVE_TODO') {
        return state.filter(((todo) => todo.id !== action.id))
    }else if(action.type === 'TOGGLE_TODO') {
        return state.map((todo) => todo.id !== action.id ? todo : 
        Object.assign({},todo,{complete: !todo.complete}))
    }else{
        return state;
    }
}