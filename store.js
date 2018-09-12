//we are going to build a store for redux application.
//the store has the following information.
// --------------------------------------------
//THE STATE TREE
//A WAY TO GET THE STATE TREE
//A WAY TO LISTEN AND RESPOND TO THE STATE CHANGING
//A WAY TO UPDATE THE STATE


// function reducer(state = [] , action) {
//     if(action.type === 'ADD_TODO') {
//         return state.concat([action.todo])
//     }

//     return state;
// }

function appReducer(state, action) {
    if(action.type === 'DELETE_FLAVOR') {
    //    let idx = state.map(function (item) {return item.flavour;}).indexOf(action.flavor)
    let res = state.filter(item => item.flavor !== action.flavor)

        // return state.splice(idx,1)
        return res
    }
    
    return state;
}

var action = { type: 'DELETE_FLAVOR', flavor: 'Vanilla' }
var state = [
    { flavor: 'Chocolate', count: 36 }, 
    { flavor: 'Vanilla', count: 210 }, 
    { flavor: 'Apple', count: 30 },
    { flavor: 'Mango', count: 21 }
]

function createStore() {

    // var state = [
    //     { flavor: 'Chocolate', count: 36 }, 
    //     { flavor: 'Vanilla', count: 210 }, 
    //     { flavor: 'Apple', count: 30 },
    //     { flavor: 'Mango', count: 21 }
    // ]
    let listeners = [];

    const subscribe = (listener) => {
        listeners.push(listener)
    }
    getState = () => {
        return state;
    }

    return {
        getState,
        subscribe
    }
}

var res1 = appReducer(state,action);
console.log(res1)

// const store = createStore();
// store.getState();
// store.subscribe(() => {
//     console.log('The new state is: ', store.getState())
// })

// store.subscribe(() => {
//     console.log('The state changed')
// })

// $('button').click(function(){
//     console.log("One");
//     $('.firstChild').show(function(){
//       console.log("Two");
//       $('.childofChild').show();
//     });
//     console.log("Three");
//   });

// var request = require('request');
// var app = require('express')();
// var results;

// function logRes(){
//   console.log(results);
// }

// app.get('/storeData', function(req,res){
//   readResult(logRes)
// });

// function readResult(callback){
//   request('http://someroute.com/api', function(err, response, body){
//     results=body;
//     callback();
//   });
// }