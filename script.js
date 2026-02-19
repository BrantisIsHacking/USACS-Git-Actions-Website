const firstInput = document.getElementById("a");
const secondInput = document.getElementById("b");
const resultOutput = document.getElementById("result");

const toNumber = (value) => {
  if (value === "" || value === null) {
    return null;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
};

const updateResult = () => {
  const first = toNumber(firstInput.value.trim());
  const second = toNumber(secondInput.value.trim());

  if (first === null || second === null) {
    resultOutput.textContent = "--";
    return;
  }

  resultOutput.textContent = (first - second).toString();
};

[firstInput, secondInput].forEach((input) => {
  input.addEventListener("input", updateResult);
});
