let login = prompt('Input your login', '');
let password;
let currentTime = new Date().getHours();
const loginLength = 4;
if (login === 'Admin' || login === 'User') {
  password = prompt('Input password', '');
  ispasswordAccessible(login, password);

} else if (login.length < loginLength) {
  alert('I dont know any users having name length less than 4 symbols');
} else if (login === false || login === null) {
  alert('Canceled');
} else {
  alert('I dont know you');
}



function dayByName(login) {
  greetingByName('Good day, dear ', login)
}

function nightByName(login) {
  greetingByName('Good night, dear ', login)
}

function greetingByName(message, login) {
  alert(message + login);
}

function checkTime(currentTime) {
  const eight = 8;
  const twenty = 20;
  if (currentTime >= eight && currentTime < twenty) {
    dayByName(login);
  } else {
    nightByName(login);
  }
}

function ispasswordAccessible(login, password) {
  if (login === 'User' && password === 'UserPass') {
    checkTime(currentTime);
  } else if (login === 'Admin' && password === 'RootPass') {
    checkTime(currentTime);
  } else if (password === false || password === null) {
    alert('Canceled');
  } else {
    alert('Wrong password');
  }
}