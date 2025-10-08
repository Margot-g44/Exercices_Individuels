// A toi de jouer pour cette partie :-) Happy coding !

// Pour éviter la page blanche, copie d'un exo sup 
// document.getElementById("city-search").addEventListener("click", async function () {
//   const id = document.getElementById("city-input").value; // je récupère la valeur tapée dans l'input par l'utilisateur en .value

//   const response = await fetch("https://nominatim.openstreetmap.org/search?q=Paris&format=json&addressdetails=1&limit=1")
//   // le fetch ci dessus pour récupérer les infos
//   const data = await response.json(); // on transforme la réponse json
// })


// export async function getWeather(cityFromClick = null) {
//   const RAW_CITY_INPUT = cityFromClick || document.getElementById("city").value.trim();
//   const CITY_INPUT = formatCityName(RAW_CITY_INPUT);
//     if (!CITY_INPUT) return alert("Veuillez entrer une ville");

//   try {
//     const RESPONSE = await fetch(
//       `/weather?city=${encodeURIComponent(CITY_INPUT)}`
//     );
//     const RESULT = await RESPONSE.json();
//     console.log("API response:", RESULT);
//     if (!RESPONSE.ok) {
//       showError(RESULT.error || RESULT.message || "Erreur inconnue");
//       return;
//     }


document.getElementById("searchBtn").addEventListener("click", async function () {
  const cityName = document.getElementById("cityInput").value;

  // appel à l'API OpenStreetMap
  const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(cityName)}&format=json&limit=1`);
  const data = await response.json();

  if (data.length > 0) {
    const { lat, lon } = data[0]; // on récupère latitude et longitude
    document.getElementById("gps").innerText = `Latitude : ${lat}, Longitude : ${lon}`;
    document.getElementById("city").innerText = cityName;
  } else {
    document.getElementById("gps").innerText = "Ville non trouvée.";
    document.getElementById("city").innerText = "Aucune donnée.";
  }
});

// Fonction pour récupérer les coordonnées GPS depuis le nom de la ville
async function fetchCoordinates(cityName) {
  const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(cityName)}&format=json&limit=1`);
  const data = await response.json();

  if (data.length > 0) {
    const { lat, lon } = data[0];
    return { lat, lon };
  } else {
    throw new Error("Ville non trouvée");
  }
}


// exo copier coller pour le try and catch
// const offersDiv = document.getElementById("offers")
// offersDiv.innerHTML = "<p>“Chargement des offres…”</p>"

// async function fetchOffers(){
//     try {
//         const response = await fetch('https://corsproxy.io/?https://codepassport.dev/api/offers/'); // on appelle fetch avec une URL d'API
//         const offersTab = await response.json() // offers est un tableau
//         // console.log(offers[0].titre); // afficher le titre du 1er élément
//         // On efface le paragraphe temporaire
//         offersDiv.innerHTML = ""
//         // Parcours de tableau !
//         for (offerElem of offersTab){
//             offersDiv.innerHTML += 
//             `<h2>${offerElem.titre}</h2>
//             <p>${offerElem.description}</p>`
//         }
//     } catch (error){
//         console.error(error)
//         offersDiv.innerHTML = "<p>Erreur de chargement</p>"
//     }

// }

// fetchOffers() 

// Fonction pour récupérer la température avec les coordonnées
async function fetchWeather(lat, lon) {
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
  const data = await response.json();

  // Extraire la température actuelle
  const temperature = data.current_weather.temperature;

  // Affichage dans le DOM
  document.getElementById("temperature").innerText = `${temperature} °C`;
}

// Événement sur le bouton
document.getElementById("searchBtn").addEventListener("click", async function () {
  const cityName = document.getElementById("cityInput").value;

  try {
    // Étape 1 : récupérer les coordonnées
    const { lat, lon } = await fetchCoordinates(cityName);
    document.getElementById("gps").innerText = `Latitude : ${lat}, Longitude : ${lon}`;
    document.getElementById("city").innerText = cityName;

    // Étape 2 : récupérer la température
    await fetchWeather(lat, lon);
  } catch (error) {
    document.getElementById("gps").innerText = "Erreur : " + error.message;
    document.getElementById("temperature").innerText = "- °C";
    document.getElementById("city").innerText = "Erreur";
  }
});




