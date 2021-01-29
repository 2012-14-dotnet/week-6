import { Ajax } from "./ajax";

const formButton: HTMLElement | null = document.querySelector('button');
const searchEntry: HTMLElement | null = document.querySelector('#search');
const searchResult: HTMLElement | null = document.querySelector('#result');
const ajaxClient = new Ajax();

if (formButton) {
  formButton.addEventListener('click', function () {
    if (searchEntry) {
      let query: string = searchEntry.nodeValue ? searchEntry.nodeValue : '';
      ajaxClient.prom(query, pass, fail);
    }
  });
}


function pass(res: Response): void {
  res.json().then(function (data: any) {
    if (searchResult) {
      searchResult.innerHTML = JSON.stringify(data);
    }
  });
}

function fail(res: Response): void {
  console.error(res);
}
