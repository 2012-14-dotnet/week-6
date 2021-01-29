// send request
// receive promise
// receive fulfillment (response) (one of 2 states: success or failure)
function ajax2(input) {
  fetch(`${apiUrl}${input}`, { method: 'put' }).then(pass, fail).catch(fn); // promise
}

function ajax(input) {
  let xhr = new XMLHttpRequest();

  xhr.open('get', `${apiUrl}${input}`); // string interpolation, template string

  xhr.onreadystatechange = function () { // callback function
    if (xhr.readyState == 4 && xhr.status == 200) {
      searchResult.innerHTML = xhr.response;
    }
  }

  xhr.send();

  // 0 - open connection
  // 1 - send request
  // 2 - receive response (context)
  // 3 - transmit payload (content)
  // 4 - end payload, close connection
}