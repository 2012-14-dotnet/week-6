export class Ajax {
    constructor() {
        this.apiUrl = 'https://swapi.dev/api/people/';
    }
    xhr(input, elem) {
        let xhr = new XMLHttpRequest();
        xhr.open('get', `${this.apiUrl}${input}`);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                elem.innerHTML = xhr.response;
            }
        };
        xhr.send();
    }
    prom(input, fnPass, fnFail) {
        fetch(`${this.apiUrl}${input}`).then(fnPass, fnFail);
    }
}
