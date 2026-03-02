let resetButton = document.getElementById("resetButton");
let responseMessage = document.getElementById("responseMessage");
let userInputField = document.getElementById("userFeeling");

// list of encouraging messages
const encouragements = [
  "Thank you for sharing. You are allowed to grow slowly.",
  "One brave step at a time. You're doing better than you think.",
  "Your pace is perfect. Softness is a strength.",
  "It is okay to be a masterpiece and a work in progress at the same time.",
  "Take a deep breath. You have survived 100% of your hardest days.",
  "You don't have to have it all figured out today."
];

resetButton.addEventListener("click", function () {
  let feeling = userInputField.value.trim();

  responseMessage.style.marginTop = "20px";
  responseMessage.style.fontStyle = "italic";
  responseMessage.style.color = "#a45c6a";

  if (feeling.length > 0) {
  // random pick a mesasage 
    let randomIndex = Math.floor(Math.random() * encouragements.length);
    let randomMessage = encouragements[randomIndex];

    responseMessage.innerHTML = `${randomMessage} <br> <strong>Keep going.</strong>`;
  } else {
    responseMessage.innerHTML =
      "It’s okay if you don’t have the words yet. You’re still becoming.";
  }


  userInputField.value = "";
});
