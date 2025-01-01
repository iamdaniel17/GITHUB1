// Selecting the counter element and buttons
const counter = document.getElementById("counter");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");

// Initialize the counter value
let count = 0;

// Function to update the counter display
function updateCounter() {
  counter.textContent = count;
  counter.style.color = count > 0 ? "green" : count < 0 ? "red" : "#555";
}

// Add event listeners to the buttons
decreaseBtn.addEventListener("click", () => {
  count--;
  updateCounter();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});

increaseBtn.addEventListener("click", () => {
  count++;
  updateCounter();
});

// Initial counter update
updateCounter();
