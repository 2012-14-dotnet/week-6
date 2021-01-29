// JavaScript, name of the language
// EcmaScript, stantardized name of JavaScript
// ES1, ES3, ES5, ES6 (2015), ES2016, ES

const formButton = document.querySelector('button');
const searchEntry = document.querySelector('#search');
const searchResult = document.querySelector('#result');
const apiUrl = 'https://swapi.dev/api/people/';

formButton.addEventListener('click', function () { // callback function
  let query = searchEntry.value;
  ajax2(query);
});

function pass(res) {
  res.json().then(function (data) {
    searchResult.innerHTML = JSON.stringify(data);
  });
}

function fail(res) {
  console.error(res);
}

let saySomething = function () {
  return new Promise(doSomething);

  function doSomething() {
    console.log('hello');
  }
}

saySomething().then(pass, fail);


// if (condition) then (true) do this or (false) do that
// if (promise) then (true) do this or (false) do that
// (promise) then (true) or (false)
// promise.then(true, false)
// promise.then(true, false).catch()
// http
// request.then(200, 404)
// request.then(function, function)
// fetch.then(function, function)

function fred() {
  talkTooMuch();
}

function talkTooMuch() {

}

function fred2(fn) {
  setTimeout(() => {
    fn(); // callback
  }, 10000);

}