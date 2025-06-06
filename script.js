const openBtn = document.querySelector("#popUpBtnOn");
const closeBtn = document.querySelector("#popupBtnOff");
const popup = document.querySelector("#popup");

document.querySelector("#popUpBtnOn").addEventListener("click", function () {
  document.querySelector("#popup").style.display = "flex";
});
