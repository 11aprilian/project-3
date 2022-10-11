listDigimon = document.getElementById("list-digimon")

let getDataDigimon = async () => {
    let URL = "https://digimon-api.vercel.app/api/digimon"
    let response = await fetch(URL)
    let digimons = await response.json()
  
    // menampilkan 10 data digimon
    digimons.slice(0, 10).forEach((item, index) => {
        console.log(digimons);
    })
  }
  
  getDataDigimon()