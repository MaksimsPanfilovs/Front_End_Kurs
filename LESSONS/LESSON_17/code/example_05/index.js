const imgElement = document.getElementById("cat-image");

fetch("https://api.thecatapi.com/v1/images/search")
  .then((catInfo) => catInfo.json())
  .then((data) => {
    const catImgUrl = data[0].url;
    imgElement.src = catImgUrl;
  });
