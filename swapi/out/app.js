import { Ajax } from "./ajax";
const formButton = document.querySelector('button');
const searchEntry = document.querySelector('#search');
const searchResult = document.querySelector('#result');
const ajaxClient = new Ajax();
if (formButton) {
    formButton.addEventListener('click', function () {
        if (searchEntry) {
            let query = searchEntry.nodeValue ? searchEntry.nodeValue : '';
            ajaxClient.prom(query, pass, fail);
        }
    });
}
function pass(res) {
    res.json().then(function (data) {
        if (searchResult) {
            searchResult.innerHTML = JSON.stringify(data);
        }
    });
}
function fail(res) {
    console.error(res);
}
