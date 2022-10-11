let listMovie = document.getElementById("list")

let getDataMovie = async () => {
    let URL = "https://api.themoviedb.org/3/movie/popular?api_key=d41688cb0f0ee69b62145a634b120198&language=en-US"
    let response = await fetch(URL)
    let movies = await response.json()
    console.log(movies.results);

    movies.results.forEach((item, index) => {
        let IMG = 'https://image.tmdb.org/t/p/w500'
        listMovie.innerHTML += 
        `<div class=" p-10 rounded mt-8 border border-gray-200">
        <img src="${IMG+item.poster_path}" class="" width="150" alt="">
        <h1 class="mt-2 font-semibold>${item.title}</h1>
        <h1 class="mt-2">Realese : ${item.release_date}</h1>
        <h1 class="mt-2">Rating : ${item.vote_average}</h1>
        </div>`
    })
  }
  
  getDataMovie()