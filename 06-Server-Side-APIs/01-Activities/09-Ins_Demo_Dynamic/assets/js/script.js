var issueContainer = document.getElementById('issues');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/repos/nodejs/node/issues?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);//log the data so you can look to see what you want to pull
      for (var i = 0; i < data.length; i++) {
        var userName = document.createElement('h3');
        var issueTitle = document.createElement('p');
        userName.textContent = data[i].user.login;
        issueTitle.textContent = data[i].title;
        issueContainer.append(userName);
        issueContainer.append(issueTitle);
      }
    });
}
fetchButton.addEventListener('click', getApi);
