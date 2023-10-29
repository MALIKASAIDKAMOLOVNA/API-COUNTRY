const body = document.querySelector("body")
const mode1 = document.querySelector(".mode1")
const mode2 = document.querySelector(".mode2")
const header = document.querySelector(".header")
const navbar = document.querySelector(".navbar")
const card = document.querySelectorAll(".cardlar div")
const input = document.querySelector(".input")
const inputt = document.querySelector("input")
const select = document.querySelector("select")
const region = document.querySelector("#region")
const loader = document.querySelector(".loader")
const contires = document.querySelector(".contires")
const option = document.querySelectorAll("option")





const BASE_URL = "https://restcountries.com/v3.1/all"


const add = async (api) => {
    const request = await fetch(api)
    const data = await request.json()
    loader.classList.add("active")
    showContent(data)
}
add(BASE_URL)


function showContent(countries){
    countries.forEach(country => {
        let countryDiv = document.createElement("a")
        countryDiv.href = "./country/country.html"
        countryDiv.classList.add("country")


        countryDiv.addEventListener("click" , () => {
          localStorage.setItem("Malika", country.name.common)
    })



        countryDiv.innerHTML = `
            <img src=${country.flags.png} alt="flag" height="160px">
            <h3>${country.name.common}</h3>
            <p> <span> Population:&nbsp&nbsp</span>${country.population}</p>
            <p class="regions"> <span> Region: &nbsp &nbsp &nbsp &nbsp </span> ${country.region}</p>
            <p> <span> Capital: &nbsp &nbsp &nbsp &nbsp </span> ${country.capital}</p>
        `
        contires.append(countryDiv)

        mode1.addEventListener("click", () => {
            mode2.style.display = "flex"
            mode1.style.display = "none"
            header.style.background = "rgb(32, 44, 54)"
            body.style.background = "rgb(32, 44, 54)"
            navbar.classList.add("navbar2")
            input.classList.add("input2")
            select.classList.add("select2")
            countryDiv.classList.add("card2")
            inputt.style.color = "white"
        })

        mode2.addEventListener("click", () => {
            mode2.style.display = "none"
            mode1.style.display = "flex"
            header.style.background = "rgb(196, 243, 243)"
            body.style.background = "rgb(196, 196, 196)"
            navbar.classList.remove("navbar2")
            input.classList.remove("input2")
            select.classList.remove("select2")
            countryDiv.classList.remove("card2")
            inputt.style.color = "black"
        })
    });

    inputt.addEventListener("input", () => {
        const searchCountry = inputt.value.trim().toLowerCase()
        contires.childNodes.forEach((country) => {
            if(
                !country
                    .querySelector("h3")
                    .textContent.toLowerCase()
                    .includes(searchCountry)
            ){
                country.classList.add("hidden")
            }else{
                country.classList.remove("hidden")
            }
        })
    })




    region.addEventListener("change", () => {
        const regionAll = region.value.trim().toLowerCase();
        // console.log(regionAll);
        contires.childNodes.forEach((country) => {
            const regionAll = region.value.trim().toLowerCase();
            if (regionAll == "all") {
                country.classList.remove("hidden");
            } else if (
                !country
                    .querySelector(".regions")
                    .textContent.toLowerCase()
                    .includes(regionAll)
            ) {
                country.classList.add("hidden");
            } else {
                country.classList.remove("hidden");
            }
        });
            inputt.value = "";
    });
}
