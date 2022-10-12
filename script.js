let listMovie = document.getElementById("list")
let listSearch = document.getElementById("list-search")
let inputSearch = document.getElementById("search")
let button = document.getElementById("submit")
let body = document.getElementsByTagName("body")
let form = document.getElementById("form");
let API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=d41688cb0f0ee69b62145a634b120198&language=en-US"

let getDataMovie = async (URL) => {
    let response = await fetch(URL)
    let movies = await response.json()
    console.log(movies.results);

    movies.results.forEach((item, index) => {
        let IMG = 'https://image.tmdb.org/t/p/w500'
        listMovie.innerHTML += 
        `<div class="shadow-lg h-64 w-64 ml-4 p-10 rounded-lg mt-8 border border-gray-200">
        <img src="${IMG+item.poster_path}" class="rounded-lg" width="150" alt="">
        <h1 class="mt-2 font-semibold">${item.title}</h1>
        <h1 class="mt-2">Realese : ${item.release_date}</h1>
        <h1 class="mt-2">Rating : ${item.vote_average}</h1>
        </div>`
    })
  }

  let getDataSearch = async (URL) => {
    let response = await fetch(URL)
    let movies = await response.json()
    console.log(movies.results);

    movies.results.forEach((item, index) => {
        let IMG = 'https://image.tmdb.org/t/p/w500'
        listMovie.remove()
        listSearch.innerHTML += 
        `<div class="shadow-lg h-64 w-64 ml-4 p-10 rounded-lg mt-8 border border-gray-200">
        <img src="${IMG+item.poster_path}" class="rounded-lg" width="150" alt="">
        <h1 class="mt-2 font-semibold">${item.title}</h1>
        <h1 class="mt-2">Realese : ${item.release_date}</h1>
        <h1 class="mt-2">Rating : ${item.vote_average}</h1>
        </div>`
    })
  }

  getDataMovie(API_URL)

  form.addEventListener('submit', (e) => {
    let SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=d41688cb0f0ee69b62145a634b120198&query='
    let searchValue = inputSearch.value
    e.preventDefault()

    if(searchValue && searchValue !==''){
        getDataSearch(SEARCH_URL+searchValue+'&page=1')
        searchValue = ''
    }else{
        window.location.reload()
    }
    
  })

