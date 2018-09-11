// Application data is stored outisde the app and is just referenced by the app. i.e. all the data is stored outside the ui,
// and is just referenced by the ui.
//state tree will be depicted by TRIANGLE
//main goal that Redux is trying to offer is predictable state management


function createStore() {
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
    
    return {
        getState,
        subscribe
    }
}

const store = createStore()

store.subscribe(() => {
    console.log('The user updated the state')
})