// imported auxiliar functions.
import { shakeAdvert, showErrorScreen, clearEncryptedBox } from './domActions';

// function that manages button actions.
export const manageClickEvents = () => {
  const encryptedBox = document.querySelector('.encrypted-box');
  const warningText = document.querySelector('.warning-text');
  const clearButton = document.getElementById('clear-button');

  clearButton.addEventListener('click', clearEncryptedBox);

  document.getElementById('encrypt-button').addEventListener('click', () => {
    function verifyTextToEncrypt (text) {
      return /^[a-z\s]+$/.test(text);
    }
    const textAreaValue = document.getElementById('textarea').value;
    const isTextValid = verifyTextToEncrypt(textAreaValue);

    if (!isTextValid) {
      shakeAdvert();
      return;
    }

    const textEncrypted = textAreaValue.split('').map(char => {
      if (char.match(/[a-z]/)) {
        return String.fromCharCode(((char.charCodeAt(0) - 97 + 3) % 26) + 97);
      } else {
        return char;
      }
    }).join('');

    const textToAppend = document.createElement('p');
    textToAppend.textContent = textEncrypted;
    textToAppend.setAttribute('id', 'encryptedText');

    encryptedBox.innerHTML = '';
    encryptedBox.appendChild(textToAppend);

    if (!encryptedBox.contains(clearButton)) {
      encryptedBox.appendChild(clearButton);
    }

    if (warningText.classList.contains('shake-warning')) {
      warningText.classList.toggle('shake-warning');
    }
  });

  document.getElementById('desencrypt-button').addEventListener('click', () => {
    const encryptedText = document.getElementById('encryptedText');
    if (encryptedBox.contains(encryptedText)) {
      const textDecrypted = encryptedText.textContent.split('').map(char => {
        if (char.match(/[a-z]/)) {
          return String.fromCharCode(((char.charCodeAt(0) - 97 - 3 + 26) % 26) + 97);
        } else {
          return char;
        }
      }).join('');

      encryptedBox.innerHTML = '';

      const textDecryptedElement = document.createElement('p');
      textDecryptedElement.id = 'decrypted-text';
      textDecryptedElement.textContent = textDecrypted;

      encryptedBox.appendChild(textDecryptedElement);

      if (!encryptedBox.contains(clearButton)) {
        encryptedBox.appendChild(clearButton);
      }

      if (warningText.classList.contains('shake-warning')) {
        warningText.classList.toggle('shake-warning');
      }
    } else {
      showErrorScreen();
    }
  });
};
