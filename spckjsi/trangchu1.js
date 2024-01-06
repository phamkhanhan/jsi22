var kothic;
var thich;
var profile;
kothic = document.querySelectorAll(".btn_x");
thich = document.querySelectorAll(".btn_tim");
profile = document.querySelectorAll(".profile");
let profile_container = document.getElementsByClassName("profile_container");
let list_profile_from_localstrorage = JSON.parse(
  localStorage.getItem("profiles")
);
let s = "";
for (let i = 0; i < list_profile_from_localstrorage.length; i++) {
  s += `
  <div class="profile" style='background-image: url(${list_profile_from_localstrorage[i].img});'>
          <div class="description_profile">
          <div class="dong1">
                  <h1>${list_profile_from_localstrorage[i].name}</h1>
                  <h1>${list_profile_from_localstrorage[i].age}</h1>
                  </div>
                  <div>
                  <span><i class="fa-solid fa-location-dot" style="color: #005eff;"></i> <span>${list_profile_from_localstrorage[i].place}</span> </span>
                  </div>
                  <div>
                  <span> <i class="fa-solid fa-graduation-cap" style="color: #005eff;"></i><span>${list_profile_from_localstrorage[i].school_work}</span></span>
                  </div>
                  <div>
                  <span><i class="fa-solid fa-map-pin" style="color: #005eff;"></i><span>2km</span></span>
                  </div>
                  <div>
                  <p>${list_profile_from_localstrorage[i].description}</p>
                  </div>
                  <script src="https://use.fontawesome.com/fe459689b4.js"></script>
                  
                  <button onclick="unLike()" class="btn btn_x" id="x"><i class="fa-solid fa-x"></i></button>
                  <button onclick="like()" class="btn btn_tim" id="tim"><i class="fa-solid fa-heart"></i></button>
                  </div>
                  </div>
`;
}
profile_container[0].innerHTML = s;