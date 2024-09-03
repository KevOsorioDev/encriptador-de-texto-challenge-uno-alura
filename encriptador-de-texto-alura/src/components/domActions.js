const noTextAdvert = document.querySelector('.no-text-advert');
const clearButton = document.getElementById('clear-button');

// function that adverts the query to encrypt isn´t correct. It allows "shaking" animation to warning text.
export function shakeAdvert () {
  return document.querySelector('.warning-text').classList.add('shake-warning');
}

// function that adverts there´s nothing to decrypt with a pop-up.
export function showErrorScreen () {
  const main = document.querySelector('main');

  const errorScreen = document.createElement('div');
  errorScreen.classList.add('error-screen');

  const errorContainer = document.createElement('div');
  errorContainer.classList.add('error-container');

  const closeButton = document.createElement('div');
  closeButton.classList.add('close-error-screen-button');
  closeButton.addEventListener('click', () => { main.removeChild(errorScreen); });

  const closeIcon = document.createElement('i');
  closeIcon.classList.add('fa-solid', 'fa-xmark');
  closeButton.appendChild(closeIcon);

  const warningIcon = document.createElement('i');
  warningIcon.classList.add('fa-solid', 'fa-circle-exclamation');

  const errorMessage = document.createElement('p');
  errorMessage.textContent = 'No se ha encontrado ningun texto para desencriptar, intentalo de vuelta luego de encriptar algún mensaje previamente.';

  errorContainer.appendChild(closeButton);
  errorContainer.appendChild(warningIcon);
  errorContainer.appendChild(errorMessage);
  errorScreen.appendChild(errorContainer);

  main.appendChild(errorScreen);
}

// function that clears both boxes (encrypt, decrypt).
export function clearEncryptedBox () {
  const encryptedBox = document.querySelector('.encrypted-box');
  const encryptedText = document.getElementById('encryptedText');
  const decryptedText = document.getElementById('decrypted-text');

  if (encryptedBox.contains(encryptedText) || encryptedBox.contains(decryptedText)) {
    encryptedBox.innerHTML = '';
    encryptedBox.appendChild(noTextAdvert);
    clearButton.addEventListener('click', clearEncryptedBox);
    encryptedBox.appendChild(clearButton);
  }
}