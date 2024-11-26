const movies = "https://ghibliapi.vercel.app/films";

const response = await fetch(movies);
const data = await response.json();

console.log(data);
// console.log("Test");

let list = document.getElementById("ghibliList");
data.forEach((movie) => {
  let entry = document.createElement("li");
  let jp = document.createElement("span");
  let en = document.createElement("span");

  jp.appendChild(document.createTextNode(`${movie.original_title} (${movie.release_date})`));
  jp.id = "jp";
  en.appendChild(document.createTextNode(`${movie.title} (${movie.release_date})`));
  en.id = "en";

  entry.appendChild(jp);
  entry.appendChild(en);
  entry.id = "movie-title";
  list.appendChild(entry);
});
