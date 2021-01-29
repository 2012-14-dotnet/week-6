const userInput = document.querySelector('input');
const formButton = document.querySelector('button');
const salutationElement = document.createElement('p');

let buttonPush = function () { // function expression
  salutationElement.innerText = getSalutation(userInput.value);
  document.body.appendChild(salutationElement);
}

function getSalutation(input) { // function statement
  let currentTime = new Date();
  let result;

  if (currentTime.getHours() < 12) {
    result = "good morning, " + input;
  } else if (currentTime.getHours() < 18) {
    result = "good afternoon, " + input;
  } else {
    result = "good evening, " + input;
  }

  return result;
}

formButton.addEventListener('click', buttonPush);
