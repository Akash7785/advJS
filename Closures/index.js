let id;
let movies_div = document.getElementById("movies");
async function main() {
  try {
    let query = document.getElementById("qurey").value;
    let res = await fetch(`http://www.omdbapi.com/?apikey=7cc2c43f&s=${query}`);
    let data = await res.json();
    let actual_data = data.Search;
    console.log("Actual Data", data);
    if (actual_data != undefined) {
      appendMovies(actual_data);
    }
  } catch (err) {
    console.log(err);
  }
}

function appendMovies(data) {
  movies_div.innerHTML = null;
  data.forEach(function (ele) {
    let p = document.createElement("p");
    p.innerText = ele.Title;
    movies_div.append(p);
  });
}

function debounce(func, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    func();
  }, delay);
}
