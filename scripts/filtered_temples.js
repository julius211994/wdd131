// Footer

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;


// Hamburger Menu

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    menuButton.textContent =
        navigation.classList.contains("open") ? "✖" : "☰";
});


// Temple Array

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-8210.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://assets.ldscdn.org/b4/6e/b46edae85cd94f21030fac5fe3b53ae04d83e902/manti_temple_lds.jpeg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-38451.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://assets.ldscdn.org/75/7b/757b6bd128ae65592565267e25b616675a1f942b/washington_dc_mormon_temple.jpeg"
    },
    {
        templeName: "Lima Peru",
        location: "Lima, Peru",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "images/Lima_Peru_Temple.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "images/Mexico_City_Mexico_Temple.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "images/Rome_Italy_Temple.webp"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 5290,
        imageUrl: "images/Tokyo_Japan_Temple.jpg"
    },
    {
        templeName: "Manila Philippines",
        location: "Manila, Philippines",
        dedicated: "1984, September, 25",
        area: 26683,
        imageUrl: "https://www.thechurchnews.com/resizer/v2/MDNNOYC7RKDCRGCQGI46V7XEYI.jpg?auth=29e967ec6d45337f845c490971fab65d185de3165afc9d7589ed2fbf74c12a69&focal=541%2C450&width=1440&height=900"
    }
];


// Display Temple Cards

createTempleCards(temples);

function createTempleCards(filteredTemples) {

    const container = document.querySelector(".temple-grid");

    container.innerHTML = "";

    filteredTemples.forEach((temple) => {

        const card = document.createElement("section");
        card.classList.add("temple-card");

        const name = document.createElement("h2");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML =
            `<span class="label">Location:</span> ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.innerHTML =
            `<span class="label">Dedicated:</span> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML =
            `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";
        image.width = 400;
        image.height = 250;

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        container.appendChild(card);
    });
}


// Navigation Filters

document.querySelector("#home").addEventListener("click", () => {
    createTempleCards(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    const oldTemples = temples.filter(
        temple => Number(temple.dedicated.split(",")[0]) < 1900
    );
    createTempleCards(oldTemples);
});

document.querySelector("#new").addEventListener("click", () => {
    const newTemples = temples.filter(
        temple => Number(temple.dedicated.split(",")[0]) > 2000
    );
    createTempleCards(newTemples);
});

document.querySelector("#large").addEventListener("click", () => {
    const largeTemples = temples.filter(
        temple => temple.area > 90000
    );
    createTempleCards(largeTemples);
});

document.querySelector("#small").addEventListener("click", () => {
    const smallTemples = temples.filter(
        temple => temple.area < 10000
    );
    createTempleCards(smallTemples);
});