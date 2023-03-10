const blockContainer = document.getElementById("blockContainer");
const blockElement = document.querySelectorAll(".block");
const colors = [
  "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
  "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
  "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)",
  "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
  "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
  "linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)",
  "linear-gradient(to right, #f83600 0%, #f9d423 100%)",
  "linear-gradient(to top, #f77062 0%, #fe5196 100%)",
  "linear-gradient(to top, #4481eb 0%, #04befe 100%)",
  "linear-gradient(to right, #f83600 0%, #f9d423 100%)",
  "linear-gradient(60deg, #abecd6 0%, #fbed96 100%)",
  "linear-gradient(to top, #209cff 0%, #68e0cf 100%)",
  "linear-gradient(to top, #b3ffab 0%, #12fff7 100%)",
  "linear-gradient(to right, #0acffe 0%, #495aff 100%)",
];
blockElement.forEach((block) => {
  block.addEventListener("mouseenter", () => {
    block.innerText = "";
    block.style.opacity = "1";
    block.style.transition = "opacity";
    const randomNumber = Math.floor(Math.random() * colors.length);
    block.style.backgroundImage = colors[randomNumber];
  });
  block.addEventListener("mouseleave", () => {
    block.style.opacity = "0";
    block.style.transition = "opacity 1000ms";
    const randomNumber = Math.floor(Math.random() * colors.length);
    block.style.backgroundImage = colors[randomNumber];
  });
});