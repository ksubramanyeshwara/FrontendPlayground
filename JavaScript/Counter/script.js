const countElement = document.getElementById("count");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const step = document.querySelector("#step");
const reset = document.querySelector(".reset");

let count = 0;

// stepValue
const getStepValue = () => {
  const stepValue = parseInt(step.value);

  if (isNaN(stepValue)) {
    return 1;
  }
  return stepValue;
};

// display count
const updateCount = () => {
  countElement.textContent = count;
};

increment.addEventListener("click", () => {
  count = count + getStepValue();
  updateCount();
});

decrement.addEventListener("click", () => {
  count = count - getStepValue();
  updateCount();
});

reset.addEventListener("click", () => {
  count = 0;
  updateCount();
});

