export const handlerForm = () => {
  const outputUserName = document.querySelector(".header__toolbar__name");
  const inputUserName = document.querySelector("#username");
  const overflowContainer = document.querySelector(".overflow");
  const buttonForm = document.querySelector(".btnForm");
  if (!outputUserName || !inputUserName || !overflowContainer || !buttonForm)
    return;

  let inputVal = '';

  inputUserName.addEventListener("input", () => {
     inputVal = inputUserName.value.trim();
    setTimeout(() => {
      if (!inputVal) {
        buttonForm.setAttribute("disabled", "true");
        return;
      }
      buttonForm.removeAttribute("disabled");
      outputUserName.textContent = inputVal;
    }, 500);
  });

  buttonForm.addEventListener("click", () => {
    if (!inputVal) return;
    overflowContainer.classList.add("to__hidden");
  });
};
