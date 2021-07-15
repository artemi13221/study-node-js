function backendTest() {
  const name = document.querySelector('#input-name');
  const hello = document.querySelector('#input-hello');

  axios.post('/quotes', {
    name: name.value,
    hello: hello.value,
  })
    .then((responses) => {
      console.log(responses);
    })
    .catch((error) => {
      console.log(error);
    });
}

const button = document.querySelector('#input-button');
button.addEventListener('click', backendTest);
