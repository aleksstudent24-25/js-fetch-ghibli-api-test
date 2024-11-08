const movies = 'https://ghibliapi.vercel.app/films';

const response = await fetch(movies);
const data = await response.json();

console.log(data);
// console.log("Test");

let list = document.getElementById('ghibliList');
data.forEach(movie => {
    let entry = document.createElement('li');
    entry.appendChild(document.createTextNode(movie.title));
    list.appendChild(entry);
});