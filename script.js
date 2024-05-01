
const image = document.getElementById("image");
const btn = document.getElementById("button");
const api = "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1";
const res = fetch(api);
    res
      .then((data) => data.json())
      .then((result) => {
        image.src = result[0].url
      })
      .catch((error) => error.alert("No images please refer appi"));

    btn = addEventListener("click", () => {
        window.location.reload();
      });