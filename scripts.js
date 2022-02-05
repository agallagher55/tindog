const signupBtns = document.querySelectorAll("button.sign-up");
const disableSignupsBtn = document.querySelector("#disable-signups");
const enableSignupsBtn = document.querySelector("#enable-signups");

console.log(signupBtns);

function disableBtn(button) {
  button.disabled = true;
}

function enableBtn(button) {
  button.disabled = false;
}

disableSignupsBtn.addEventListener("click", (e) => {
  console.log("button clicked");
  [...signupBtns].forEach((element) => disableBtn(element));
});

enableSignupsBtn.addEventListener("click", (e) => {
  console.log("button clicked");
  [...signupBtns].forEach((element) => enableBtn(element));
});
