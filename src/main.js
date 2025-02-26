
const button = document.querySelector('.js-subscribe-button');
button.onclick =  function clickButton() {
    const buttonElement = document.querySelector(".js-subscribe-button");
    if (buttonElement.innerHTML === "Subscribe") {
      buttonElement.innerHTML = "Subscribed";
      buttonElement.classList.add("is-subscribed");
    } else {
      buttonElement.innerHTML = "Subscribe";
      buttonElement.classList.remove("is-subscribed");
    }
  }
  

