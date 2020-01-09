let greeting = document.getElementsByClassName("greeting");
let greetingContainer = document.getElementsByClassName("greetingContainer");
greetingContainer = Array.from(greetingContainer);

for (let i = 0; i < greeting.length; i++) {
  greeting[i].addEventListener("click", () => {
    if (greeting[i].id === "hello") {
      greetingContainer.map(div => {
        div.innerText = "Hello";
        div.classList.remove("hidden");
      });
    } else {
      greetingContainer.map(div => {
        div.innerText = "Goodbye";
      });
    }
  });
}
