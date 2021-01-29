export class Ajax {
  apiUrl: string = 'https://swapi.dev/api/people/';

  xhr(input: string | null, elem: HTMLElement): void {
    let xhr = new XMLHttpRequest();

    xhr.open('get', `${this.apiUrl}${input}`);

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        elem.innerHTML = xhr.response;
      }
    }

    xhr.send();
  }

  prom(input: string, fnPass: any, fnFail: any): void {
    fetch(`${this.apiUrl}${input}`).then(fnPass, fnFail);
  }
}
