eventListeners = (function() {
  // Retrieve HTML collection containing both buttons
  let greeting = document.getElementsByClassName("greeting");

  // Set containerNum to determine the number of divs to render
  let containerNum = 5;

  let greetingContainer;

  // Use for loop to set event listener for each button
  for (let i = 0; i < greeting.length; i++) {
    greeting[i].addEventListener("click", () => {
      // Check whether greetingContainer is true
      // If true, map through the array and remove all elements from greetingContainer HTML collection
      if (greetingContainer) {
        greetingContainer.map(div => {
          div.remove();
        });
      }
      // Set innerText of the divs based on the id of the button pressed
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
      // Convert the greetingContainer HTML collection into an array
      greetingContainer = Array.from(
        document.getElementsByClassName("greetingContainer")
      );
    });
  }
})();
