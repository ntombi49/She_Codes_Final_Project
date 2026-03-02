let resetButton = document.getElementById("resetButton");
let responseMessage = document.getElementById("responseMessage");
let userInputField = document.getElementById("userFeeling");

const encouragements = [
  "You are allowed to grow slowly.",
  "One brave step at a time.",
  "Your pace is perfect. Softness is a strength.",
  "Take a deep breath. You are doing enough.",
  "You don't have to have it all figured out today.",
];

resetButton.addEventListener("click", function () {
  let name = prompt("Before we begin, what is your name?");
  let feeling = userInputField.value.trim();

  if (name !== null && name !== "") {
    let randomIndex = Math.floor(Math.random() * encouragements.length);
    let randomMessage = encouragements[randomIndex];

    responseMessage.style.marginTop = "20px";
    responseMessage.style.fontStyle = "italic";
    responseMessage.style.color = "#a45c6a";

    responseMessage.innerHTML = `Thank you for sharing, ${name}. <br> ${randomMessage}`;

    alert("Check the page for your personal message, " + name + "! ✨");
  } else {
    alert("It's okay to stay anonymous. You are still seen.");
    responseMessage.innerHTML = "You are growing in ways no one sees.";
  }

  userInputField.value = "";
});
