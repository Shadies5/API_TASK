function myPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        let posts = '';
        data.forEach(element => {
        posts += `<div class ="card">
        <ul>
        <li>${element.body}</li>
        <li>${element.id}</li>
        <li  class= "words">${element.title}</li>
        <li class= "words">${element.userId}</li>
        </ul>
        </div>`
        });
        document.getElementById('posts').innerHTML = posts;
    });
}

function myComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        let comments = '';
        data.forEach(element => {
        comments += `<div class= "card2">
        <ul>
        <li>${element.body}</li>
        <li class= "mails">${element.email}</li>
        <li>${element.id}</li>
        <li class= "words">${element.name}</li>
        <li>${element.postId}</li>
        </ul>
        </div>`
        });
        document.getElementById('comments').innerHTML = comments;
  });
}

function myPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        let photos = '';
        data.forEach(element =>{
        photos += `<div class =card3>
        <ul>
        <li>${element.albumId}</li>
        <li>${element.id}</li>
        <li class= "mails">${element.thumbnailUrl}</li>
        <li  class= "words">${element.title}</li>
        <li class= "mails">${element.url}</li>
        </ul>
        </div>`
    });
        document.getElementById('photos').innerHTML = photos;
    });
}

function myAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        let albums = '';
        data.forEach(element =>{
        albums += `<div class =card4>
        <ul>
        <li>${element.id}</li>
        <li  class= "words">${element.title}</li>
        <li>${element.userId}</li>
        </ul>
        </div>`
        });
        document.getElementById('albums').innerHTML = albums;
    });
}

function myTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        let todos = '';
        data.forEach(element =>{
        todos += `<div class = "card5">
        <ul>
        <li class= "completed">${element.completed}</li>
        <li>${element.id}</li>
        <li class= "words">${element.title}</li>
        <li class= "words">${element.userId}</li>
        </ul>
        </div>`
        });
        document.getElementById('todos').innerHTML = todos;  
    });
}

function myUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        let users = '';
        data.forEach(element =>{
        users += `<div class= 'card6'>
        <ul>
        <li  class= "words">${element.name}</li>
        <li class= "mails">${element.phone}</li>
        <li class= "mails">${element.website}</li>
        <li>${element.username}</li>
        <li class= "mails">${element.email}</li>
        <li class= "location">${element.address.street}</li>
        <li class= "location">${element.company.name}</li>
        </ul>
        </div>`
        });
        document.getElementById('users').innerHTML = users;
    });
}