const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');

document.forms.create.onsubmit = function() {
  createUser({
    name: this.name.value,
    username: this.username.value
  });
  return false;
};

getUsers()

function getUsers() {
  apiRequest('GET', `${baseUrl}/users`, null, users => {
    renderTable(users)
  })
}

function createUser(userData) {
  apiRequest('POST', `${baseUrl}/users`, userData, () => {
    getUsers()
  })
}

function updateUser(id) {
  const userData = {
    name: document.getElementById('name-' + id).value,
    username: document.getElementById('username-' + id).value
  }

  apiRequest('PUT', `${baseUrl}/users/${id}`, userData, () => {
    getUsers()
  })
}

function deleteUser(id) {
  apiRequest('DELETE', `${baseUrl}/users/${id}`, null, () => {
    getUsers()
  })
}

function renderTable(users) {
  const tableBody = document.getElementById('entrypoint');
  const rows = []
  users.forEach(user => {
    rows.push(`
      <tr>
        <td><span>${user.id}</span></td>
        <td><input value="${user.name}" id="name-${user.id}"></td>
        <td><input value="${user.username}" id="username-${user.id}"></td>
        <td><button onclick="updateUser('${user.id}')">Update</button></td>
        <td><button onclick="deleteUser('${user.id}')">Delete</button></td>
      </tr>
    `)
  })
  tableBody.innerHTML = rows.join('\n')
}

function apiRequest(method, url, body, callback) {
  const xhr = new XMLHttpRequest();
  const isGet = method.toLowerCase() === 'get'
  const isDelete = method.toLowerCase() === 'delete'
  xhr.open(method, url);
  xhr.onload = () => {
    const data = isGet ? JSON.parse(xhr.response) : null;
    callback(data);
  };
  xhr.onerror = function() {
    alert('Api Request Error');
  };
  if (isGet) {
    xhr.send();
  } else {
    const payload = body ? JSON.stringify(body) : null;
    xhr.setRequestHeader('Content-type', 'application/json');
    if (isDelete) {
      xhr.setRequestHeader('Authorization', 'admin')
    }
    xhr.send(payload);
  }
}
