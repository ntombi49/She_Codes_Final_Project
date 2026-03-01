let resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", function () {
  let feeling = prompt("What feels heavy for you right now?");

  if (feeling) {
    alert(
      "Thank you for sharing. You are allowed to grow slowly. One brave step at a time.",
    );
  } else {
    alert("It’s okay if you don’t have the words yet. You’re still becoming.");
  }
});
