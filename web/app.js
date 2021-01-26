const userInput = document.querySelector('input');
const formButton = document.querySelector('button');

formButton.addEventListener('click', buttonPush);

let f = function buttonPush() { // function expression
  const salutationElement = document.createElement('p');

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
