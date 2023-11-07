const countInput = document.getElementById("countInput");
const countOutput = document.getElementById("countOutput");
const button = document.getElementById("startButton");

button.addEventListener("click", startCounting);

function startCounting() {
    const inputValue = countInput.value;
    localStorage.setItem("lastInput", inputValue);
    countOutput.innerHTML = inputValue;
  
    let counter = parseInt(inputValue);
    const interval = setInterval(() => {
      if (counter === 0) {
        countOutput.innerHTML = "Countdown complete!";
        clearInterval(interval);
      } else {
        countOutput.innerHTML = counter;
        counter--;
      }
    }, 1000);
  }