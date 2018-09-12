//we are going to build a store for redux application.
//the store has the following information.
// --------------------------------------------
//THE STATE TREE
//A WAY TO GET THE STATE TREE
//A WAY TO LISTEN AND RESPOND TO THE STATE CHANGING
//A WAY TO UPDATE THE STATE

function createStore() {

    let state = {};
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

const store = createStore();
store.getState();
store.subscribe(() => {
    console.log('The new state is: ', store.getState())
})


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