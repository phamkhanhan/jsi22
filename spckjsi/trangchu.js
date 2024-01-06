
// var kothic;
// var thich;
// var profile; 
// window.addEventListener("load", function() {

//     kothic = document.querySelectorAll(".btn_x")
//     thich = document.querySelectorAll(".btn_tim")
//     profile = document.querySelectorAll(".profile")
//     // let mua = document.getElementById("mua")
//     // let nang = document.getElementById("nang")
//     // let may =  document.getElementById("may")
    
//     // let thoitiet_container = document.querySelector(".thoitiet_container") 
//     // let profile1 = document.querySelector(".profile1")
//     // let profile2 = document.querySelector(".profile2")
//     let profile_container = document.getElementsByClassName("profile_container")
// let list_profile_from_localstrorage = JSON.parse(localStorage.getItem("profiles"))
// let s = ""
// for (let i = 0; i < list_profile_from_localstrorage.length; i++) {
//     s += `
//     <div class="profile" style='background-image: url(${list_profile_from_localstrorage[i].img});'>
//             <div class="description_profile">
//             <div class="dong1">
//                     <h1>${list_profile_from_localstrorage[i].name}</h1>
//                     <h1>${list_profile_from_localstrorage[i].age}</h1>
//                     </div>
//                     <div>
//                     <span><i class="fa-solid fa-location-dot" style="color: #005eff;"></i> <span>${list_profile_from_localstrorage[i].place}</span> </span>
//                     </div>
//                     <div>
//                     <span> <i class="fa-solid fa-graduation-cap" style="color: #005eff;"></i><span>${list_profile_from_localstrorage[i].school_work}</span></span>
//                     </div>
//                     <div>
//                     <span><i class="fa-solid fa-map-pin" style="color: #005eff;"></i><span>2km</span></span>
//                     </div>
//                     <div>
//                     <p>${list_profile_from_localstrorage[i].description}</p>
//                     </div>
//                     <script src="https://use.fontawesome.com/fe459689b4.js"></script>
                    
//                     <button class="btn btn_x" id="x"><i class="fa-solid fa-x"></i></button>
//                     <button class="btn btn_tim" id="tim"><i class="fa-solid fa-heart"></i></button>
//                     </div>
//                     </div>
//   `
// }
// profile_container[0].innerHTML = s

// let url_image = [
//     "./anh/anhgai.webp",
//     "./anh/anhgai1.jpg",
//     "./anh/anhgai2.jpg"
// ]
// let count = 0

// for (let i = 0; i < profile.length; i++) {
//     console.log(profile[i]);
//     profile[i].style.backgroundImage = `url("${url_image[i]}")`
//     if (i == 0) {
//         profile[i].style.display = "flex"
//     } else {
//         profile[i].style.display = "none"
        
//     }
// }

// for (let i = 0; i < kothic.length; i++) {
//     kothic[i].addEventListener('click', function () {
//         console.log("hịdsifjsdf");
//         if (thich[i].classList.contains('red')) {
//             thich[i].classList.remove('red');
//         }
//         this.classList.toggle('green');
//         if (count + 1 < profile.length) {
//             if (profile[count].style.display == "flex") {
//                 profile[count].style.display = "none"
//                 count = count + 1
//                 profile[count].style.display = "flex"
//             }
//         } else {
//             profile[count].style.display = "none"
//             let new_profile = document.createElement("div");
//             new_profile.className = "profile"
//             new_profile.style.backgroundImage = `url("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg")`
//             profile_container[0].appendChild(new_profile)
//             let reload = document.createElement("button")
//             reload.innerHTML = `<i class="fa-solid fa-rotate-right" style="color: #005eff;"></i>`
//             reload.addEventListener("click", function () {
//                 window.location.reload()
//             })
//             new_profile.appendChild(reload)
            
            
//         }
        
        
        
//     });
// }

// for (let i = 0; i < thich.length; i++) {
//     thich[i].addEventListener('click', function () {
        
//         if (kothic[i].classList.contains('green')) {
//             kothic[i].classList.remove('green');
//         }
//         this.classList.toggle('red');
        
//         if (count + 1 < profile.length) {
//             if (profile[count].style.display == "flex") {
//                 profile[count].style.display = "none"
//                 count = count + 1
//                 profile[count].style.display = "flex"
                
                
//             }
//         } else {
//             profile[count].style.display = "none"
//             let new_profile = document.createElement("div");
//             new_profile.className = "profile"
//             new_profile.style.backgroundImage = `url("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg")`
//             profile_container[0].appendChild(new_profile)
//             let reload = document.createElement("button")
//             reload.innerHTML = `<i class="fa-solid fa-rotate-right" style="color: #005eff;"></i>`
//             reload.addEventListener("click", function () {
//                 window.location.reload()
//             })
//             new_profile.appendChild(reload)
            
            
//         }

//     });

// }

// fetch(`https://geocoding-api.open-meteo.com/v1/search?name=hanoi`)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data.results[0].latitude);
//         console.log(data.results[0].longitude);
        
//         let latitude = data.results[0].latitude;
//         let longitude = data.results[0].longitude;
        
//         fetch(
//             `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
//             )
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (data_weather) {
//                 console.log(data_weather);
//                 // console.log(data_weather.current_weather.weathercode);
//                 // console.log(data_weather.current_weather.temperature);
//                 nhietdo.innerText = data_weather.current_weather.temperature;
                
//                 let weather_code = data_weather.current_weather.weathercode;
//                 console.log(weather_code);



//                 may.addEventListener('mouseover', function () {
//                     thoitiet_container.style.display = "flex"
//                 })
//                 may.addEventListener('mouseout', function () {
//                     thoitiet_container.style.display = "none"
//                 })
                
//                 if (weather_code >= 0 && weather_code <= 3) {
//                     mua.style.display = "none"
//                     nang.style.display = "flex"
//                 } else if (weather_code >= 45 && weather_code < 99) {
//                     nang.style.display = "none"
//                     mua.style.display = "flex"

//                 }
//                 console.log(data_weather.current_weather.temperature);

//             });

//     });

    
// })
//   let url_image = [
//     "./anh/anhgai.webp",
//     "./anh/anhgai1.jpg",
//     "./anh/anhgai2.jpg",
//   ];
let count = 0;

//   for (let i = 0; i < profile.length; i++) {
//     console.log(profile[i]);
//     profile[i].style.backgroundImage = `url("${url_image[i]}")`;
//     if (i == 0) {
//       profile[i].style.display = "flex";
//     } else {
//       console.log("Huhu");
//       profile[i].style.display = "none";
//     }
//   }
let kothic1 = document.querySelectorAll(".btn_x");
let thich1 = document.querySelectorAll(".btn_tim");

let profile_user_render = document.getElementsByClassName("profile");
setTimeout(function () {
  for (let i = 0; i < profile_user_render.length; i++) {
    console.log(profile_user_render[i]);
    // profile_user_render[i].style.backgroundImage = `url("${url_image[i]}")`;
    if (i == 0) {
      profile_user_render[i].style.display = "flex";
    } else {
      console.log("Huhu");
      profile_user_render[i].style.display = "none";
    }
  }
}, 1000);
console.log(profile_user_render);
console.log(kothic1);

// Unlike
function unLike() {
  if (this.event.target.classList.contains("red")) {
    this.event.target.classList.remove("red");
  }
  this.event.target.classList.toggle("green");
  if (count + 1 < profile_user_render.length) {
    if (profile_user_render[count].style.display == "flex") {
      profile_user_render[count].style.display = "none";
      count = count + 1;
      profile_user_render[count].style.display = "flex";
    }
  } else {
    profile[count].style.display = "none";
    let new_profile = document.createElement("div");
    new_profile.className = "profile";
    new_profile.style.backgroundImage = `url("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg")`;
    profile_container[0].appendChild(new_profile);
    let reload = document.createElement("button");
    reload.innerHTML = `<i class="fa-solid fa-rotate-right" style="color: #005eff;"></i>`;
    reload.addEventListener("click", function () {
      window.location.reload();
    });
    new_profile.appendChild(reload);
  }
}
// Like
function like() {
  if (this.event.target.classList.contains("green")) {
    this.event.target.classList.remove("green");
  }
  this.event.target.classList.toggle("red");

  if (count + 1 < profile_user_render.length) {
    if (profile_user_render[count].style.display == "flex") {
      profile_user_render[count].style.display = "none";
      count = count + 1;
      profile_user_render[count].style.display = "flex";
    }
  } else {
    profile_user_render[count].style.display = "none";
    let new_profile = document.createElement("div");
    new_profile.className = "profile";
    new_profile.style.backgroundImage = `url("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg")`;
    profile_container[0].appendChild(new_profile);
    let reload = document.createElement("button");
    reload.innerHTML = `<i class="fa-solid fa-rotate-right" style="color: #005eff;"></i>`;
    reload.addEventListener("click", function () {
      window.location.reload();
    });
    new_profile.appendChild(reload);
  }
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
        // console.log(data_weather.current_weather.weathercode);
        // console.log(data_weather.current_weather.temperature);
        nhietdo.innerText = data_weather.current_weather.temperature;

        let weather_code = data_weather.current_weather.weathercode;

        may.addEventListener("mouseover", function () {
          thoitiet_container.style.display = "flex";
        });
        may.addEventListener("mouseout", function () {
          thoitiet_container.style.display = "none";
        });

        if (weather_code >= 0 && weather_code <= 3) {
          mua.style.display = "none";
          nang.style.display = "flex";
        } else if (weather_code >= 45 && weather_code < 99) {
          nang.style.display = "none";
          mua.style.display = "flex";
        }
      });
  });