const error = document.getElementById("errors");
const listCities = document.getElementById("list-cities");
const listApartments = document.getElementById("list-apartments");

show = (element) => element.style.display = "block";
hide = (element) => element.style.display = "none";

getCities = async () => {
    try {
        const result = axios.get("http://localhost:4000/api/cities");

        const { data } = await result;

        data.forEach(element => {
            listCities.innerHTML += `<a class="list-group-item list-group-item-action" id="${element.city.toLowerCase()}" data-toggle="list"
            href="#" role="tab">${element.city}</a>`;
        });
    }
    catch (err) {
        error.innerHTML = `Couldn't reach the API.`,
            console.log(err);
    }
}

getApartments = async () => {
    try {
        const result = axios.get("http://localhost:4000/api/apartments")

        const { data } = await result;

        data.forEach(element => {
            listApartments.innerHTML += `
            <a href="https://www.google.se/maps/search/${element.address}" target="_blank" class="${element.city.toLowerCase()} px-4 py-1 text-dark">
            <strong class="d-flex justify-content-between mb-2">${element.description} <span class="text-muted">${element.price} kr</span></strong>
            <p class="text-muted">${element.address}</p>
            <i class="text-muted">Bedrooms / ${element.bedrooms} ${element.neighborhood}</i
            </a>`
        });
    }
    catch (err) {
        error.innerHTML = `Couldn't reach the API.`,
            console.log(err);
    }
}

listCities.onclick = (event) => {
    try {
        const city = event.target.getAttribute("id");

        [...document.querySelectorAll('#list-apartments a')].forEach(element => {
            if (element.classList.contains(city) || city == "all-cities")
                element.style.display = "block";
            else
                element.style.display = 'none';
        });
    }

    catch (err) {
        console.log(err);
    }
}

getApartments();
getCities();
