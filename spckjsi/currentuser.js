let login_btn = document.getElementById("login_btn")
let logout_btn = document.getElementById("logout_btn")
let mua = document.getElementById("mua")
let nang = document.getElementById("nang")
let may =  document.getElementById("may")

let thoitiet_container = document.querySelector(".thoitiet_container") 
login_btn.addEventListener("click", function(){
    window.location.href = "index.html"
})

logout_btn.addEventListener("click", function () {
    localStorage.removeItem("name")
    window.location.reload

})

let current_user = localStorage.getItem("name")

let ten = document.getElementById("ten")
if (current_user != null) {
    ten.innerText = current_user
    logout_btn.style.display = "block"
    login_btn.style.display = "none"
} else {
    logout_btn.style.display = "none"
    login_btn.style.display = "block"
}



fetch(`https://geocoding-api.open-meteo.com/v1/search?name=hanoi`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.results[0].latitude);
      console.log(data.results[0].longitude);

      let latitude = data.results[0].latitude;
      let longitude = data.results[0].longitude;

      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data_weather) {
          console.log(data_weather);
          // console.log(data_weather.current_weather.weathercode);
          // console.log(data_weather.current_weather.temperature);
          nhietdo.innerText = data_weather.current_weather.temperature;

          let weather_code = data_weather.current_weather.weathercode;
          console.log(weather_code);



          may.addEventListener('mouseover', function () {
            thoitiet_container.style.display = "flex"
          })
          may.addEventListener('mouseout', function () {
            thoitiet_container.style.display = "none"
          })

          if (weather_code >= 0 && weather_code <= 3) {
            mua.style.display = "none"
            nang.style.display = "flex"
          } else if (weather_code >= 45 && weather_code < 99) {
            nang.style.display = "none"
            mua.style.display = "flex"

          } 
          console.log(data_weather.current_weather.temperature);

        });

    });


