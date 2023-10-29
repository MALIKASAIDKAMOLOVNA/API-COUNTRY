"use strict"
let CountrisList = document.querySelector(".itemDiv")

const CountriyName = localStorage.getItem("Malika");

const add = async (url) => {
    let req = await fetch("https://restcountries.com/v3.1/all");
    let api = await req.json();

    api = api.filter(item => item.name.common === url)

    showApi(api);


    console.log(api);
}

add(CountriyName);

function showApi(countriesBanner) {

    countriesBanner.forEach(countriyBox => {
        
        let countriyBoxDiv = document.createElement("div")
        countriyBoxDiv.classList.add("countriyBox")
        countriyBoxDiv.innerHTML = `
               <img src=${countriyBox.flags.png} alt="flag" height="160px">
               <h3>${countriyBox.name.common}</h3>
               <p> <span> Population:&nbsp&nbsp</span>${countriyBox.population}</p>
               <p class="regions"> <span> Region: &nbsp &nbsp &nbsp &nbsp </span> ${countriyBox.region}</p>
               <p> <span> Capital: &nbsp &nbsp &nbsp &nbsp </span> ${countriyBox.capital}</p>
        `
        CountrisList.append(countriyBoxDiv)
    });

}