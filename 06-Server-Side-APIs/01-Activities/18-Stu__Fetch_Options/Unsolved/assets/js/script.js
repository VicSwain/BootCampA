fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
  method: 'GET',
  credentials: 'same-origin',
  cache: 'reload'
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
