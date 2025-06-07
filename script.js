const openButton = document.querySelector("#popUpBtnOn");
const hidebutton = document.querySelector("#popupBtnOff");
const Popup = document.querySelector("#popup");

document.querySelector("#popupBtnOff").addEventListener("click", function () {
  document.querySelector("#popup").style.display = "none";
});

document.querySelector("#popUpBtnOn").addEventListener("click", function () {
  document.querySelector("#popup").style.display = "flex";
});
