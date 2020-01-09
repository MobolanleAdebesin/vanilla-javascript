eventListeners = (function() {
  let greeting = document.getElementsByClassName("greeting");
  let containerNum = 5;
  let greetingContainer;
  for (let i = 0; i < greeting.length; i++) {
    greeting[i].addEventListener("click", () => {
      if (greetingContainer) {
        greetingContainer.map(div => {
          div.remove();
        });
      }
      if (greeting[i].id === "hello") {
        for (let j = 0; j < containerNum; j++) {
          newDiv = document.createElement("div");
          newDiv.innerHTML = "Hello";
          newDiv.setAttribute("class", "greetingContainer");
          document.body.appendChild(newDiv);
        }
      } else {
        for (let j = 0; j < containerNum; j++) {
          newDiv = document.createElement("div");
          newDiv.innerHTML = "Goodbye";
          newDiv.setAttribute("class", "greetingContainer");
          document.body.appendChild(newDiv);
        }
      }
      greetingContainer = Array.from(
        document.getElementsByClassName("greetingContainer")
      );
    });
  }
})();
