let resetButton = document.getElementById("resetButton");
let responseMessage = document.getElementById("responseMessage");
let userInputField = document.getElementById("userFeeling");

resetButton.addEventListener("click", function () {
  let feeling = userInputField.value.trim();

  // Change the style of the response message box
  responseMessage.style.marginTop = "20px";
  responseMessage.style.fontStyle = "italic";
  responseMessage.style.color = "#a45c6a";

  if (feeling.length > 0) {
    responseMessage.innerHTML =
      "Thank you for sharing. You are allowed to grow slowly. <br> <strong>One brave step at a time.</strong>";
  } else {
    responseMessage.innerHTML =
      "It’s okay if you don’t have the words yet. You’re still becoming.";
  }


  userInputField.value = "";
});
