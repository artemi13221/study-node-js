function postQuotes() {
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

function updateQuotes() {
  axios.put('/quotes', {
    name: 'artemi',
    hello: 'Hello, World!',
  })
    .then((responses) => {
      console.log(responses);
      document.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteQuotes() {
  const messageDiv = document.querySelector('#message-div');

  axios.delete('/quotes', {
    data: {
      name: 'artemi',
    },
  })
    .then((responses) => {
      if (responses.data === 'No quotes to delete') {
        messageDiv.textContent = 'No quote to delete';
      } else {
        console.log(responses);
        document.location.reload();
      }
    })
    .catch((error) => console.log(error));
}

const updateBtn = document.querySelector('#update-btn');
const button = document.querySelector('#input-button');
const deleteBtn = document.querySelector('#delete-btn');
button.addEventListener('click', postQuotes);
updateBtn.addEventListener('click', updateQuotes);
deleteBtn.addEventListener('click', deleteQuotes);
