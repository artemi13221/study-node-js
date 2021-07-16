function backendTest() {
  const name = document.querySelector('input#input-name'); // #input-name 만으로 이 태그가 input인지 아닌지 어케알죠?
  const hello = document.querySelector('#input-hello');

  axios.post('/quotes', {
    name: name.value,
    hello: hello.value,
  })
    .then((responses) => {
      console.log(responses);
      document.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
}

const button = document.querySelector('#input-button');
button.addEventListener('click', backendTest);
