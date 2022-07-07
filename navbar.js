// Mobile

const mobilecontent = `<div class="nav-container nav-animation">
      <div class="exit-button" data="toggleMobile">X</div>
      <div class="logo-black">
        <img src="images/deptlogo.png" height="15px" alt="logo-dept" />
      </div>
      <div class="logo-white">
        <img src="images/deptlogowhite.png" height="28px" alt="logo-dept" />
      </div>
      <div class="new-menu-list">
        <div class="new-menu">MENU</div>
        <div class="menu-list">
          <div>WORK</div>
          <div>CULTURE</div>
          <div>SERVICES</div>
          <div>INSIGHTS</div>
          <div>CAREERS</div>
          <div>CONTACT</div>
        </div>
      </div>
    </div>`;

let mobilebody = document.body;
mobilebody.insertAdjacentHTML("afterBegin", mobilecontent);

document.querySelectorAll('[data="toggleMobile"]').forEach((toggleMobile) => {
  toggleMobile.addEventListener("click", (e) => {
    document.querySelector(".nav-container").classList.toggle("nav-animation");
  });
});

// Desktop

const content = `<div class="nav-container nav-animation">
      <div class="exit-button" data="toggle">X</div>
      <div class="logo-black">
        <img src="images/deptlogo.png" height="15px" alt="logo-dept" />
      </div>
      <div class="logo-white">
        <img src="images/deptlogowhite.png" height="28px" alt="logo-dept" />
      </div>
        <div class="new-menu-list">
          <div class="menu-list">
            <div>HOME</div>
            <div>WORK</div>
            <div>CULTURE</div>
            <div>SERVICES</div>
            <div>INSIGHTS</div>
            <div>CAREERS</div>
            <div>CONTACT</div>
          </div>
        </div>
    </div>`;

let body = document.body;
body.insertAdjacentHTML("afterBegin", content);

document.querySelectorAll('[data="toggle"]').forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    document.querySelector(".nav-container").classList.toggle("nav-animation");
  });
});
