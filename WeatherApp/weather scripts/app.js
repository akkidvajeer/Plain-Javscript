const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const updateUI = (data) => {
  const cityDets = data.cityDets;
  const weather = data.weather;
  details.innerHTML = `
  <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
          <span>${weather.Temperature.Metric.Value}</span>
          <span>&deg;C</span>
        </div>`;

  //image insert

  // let timeSrc = null;

  // if (weather.IsDayTime) {
  //   timeSrc = `img/dayy.jfif`;
  // } else {
  //   //   timeSrc = `img/nightt.jfif`;
  // }

  // ternary operator

  let timeSrc = weather.IsDayTime ? `img/dayy.jfif` : `img/nightt.jfif`;
  time.setAttribute("src", timeSrc);

  // card hide condn if no data feeded

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

const updateCity = async (city) => {
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);

  return {
    cityDets: cityDets,
    weather: weather,
  };
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // get city value

  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update city ui with details
  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));

  localStorage.setItem("city", city);
});

if (localStorage.getItem("city")) {
  updateCity(localStorage.getItem("city"))
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
}

// function sumMarks(marathi, hindi, english, sanskrit, science) {
//   let a = marathi + hindi + english + sanskrit + science;
//   return a;
// }

// let b = sumMarks(45, 76, 55, 77, 60);
// document.write("marks obtained - " + b + "<br>");

// function percentage(tm) {
//   let c = (tm / 500) * 100;
//   return c;
// }

// let d = percentage(b);
// document.write(d + " %");
