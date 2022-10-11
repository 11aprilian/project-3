let listMovie = document.getElementById("list")

let getDataMovie = async () => {
    let URL = "git commit -m "first commit""
    let response = await fetch(URL)
    let movies = await response.json()
  
    // menampilkan 10 data digimon
    movies.slice(0, 10).forEach((item, index) => {
        console.log(movies);
    })
  }
  
  getDataMovie()