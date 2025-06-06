const openButton = document.querySelector("#popUpBtnOn");
const hidebutton = document.querySelector("#popupBtnOff");
const Popup = document.querySelector("#popup");

document.querySelector("#popUpBtnOn").addEventListener("click", function () {
  document.querySelector("#popup").style.display = "flex";
});
