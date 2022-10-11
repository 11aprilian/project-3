listDigimon = document.getElementById("list-digimon")

let getDataDigimon = async () => {
    let URL = "https://digimon-api.vercel.app/api/digimon"
    let response = await fetch(URL)
    let digimons = await response.json()
  
    // menampilkan 10 data digimon
    digimons.slice(0, 10).forEach((item, index) => {
         listDigimon.innerHTML += 
      `<div>
        <img src="${item.img}" alt="" width="200">
        <h3>${item.name}</h3>
      </div>`
    })
  }
  
  getDataDigimon()