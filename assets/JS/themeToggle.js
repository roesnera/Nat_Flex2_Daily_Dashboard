// const toggleLightDark = () => {
//     const body = document.body;
//     const header = document.header;
//     body.classList.toggle('dark-mode');
//     header.classList.toggle('dark-mode');
// }
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
