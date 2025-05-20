
const fullNameElem = document.getElementById("full-name");
const avatarImg = document.getElementById("user-avatar");
const emailElem = document.getElementById("user-email");

// если нет токена - перекинет на страницу логина
if(!localStorage.getItem("access_token")) {
    window.location.replace("/login");
}


async function fetchProfile() {
  const accessToken = localStorage.getItem("access_token");

  const res = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const user = await res.json();
//   console.log(user);

  const {avatar, email, name} = user;

  fullNameElem.innerText = name;
  avatarImg.refererPolicy = "no-referrer";
  avatarImg.crossOrigin = "anonymous"
  avatarImg.src = avatar;
  emailElem.innerText = email;
}

fetchProfile();