function cari() {
  const { value } = document.getElementById("searchInput");
  console.log("searching");

  const baseUrl = "https://www.google.com/search?q=";
  location.replace(baseUrl + value);
}

// Webcam
// const webCamElement = document.getElementById("webCam");
// const canvasElement = document.getElementById("canvas");
// const webcam = new Webcam(webCamElement, "user", canvasElement);
// webcam.start();

// function takeAPicture() {
//   let picture = webcam.snap();
//   document.querySelector("a").href = picture;
// }
