
function addElementToDOM(containerId, text) {
  const container = document.getElementById(containerId);
  const div = document.createElement('div');
  div.textContent = text;
  container.appendChild(div);
}

function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.remove();
  }
}

function simulateClick(containerId, text) {
  addElementToDOM(containerId, text);
}

function handleFormSubmit(formId, outputId) {
  const form = document.getElementById(formId);
  const input = form.querySelector('input');
  const output = document.getElementById(outputId);

  const value = input.value.trim();
  if (value) {
    output.textContent = `Hello, ${value}`;
  } else {
    showError('Input cannot be empty');
  }
}

function showError(message) {
  const errorBox = document.getElementById('error-message');
  errorBox.textContent = message;
  errorBox.classList.remove('hidden');
}

module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
  showError
};


