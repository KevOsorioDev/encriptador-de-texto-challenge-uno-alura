import './styles/main.scss';
import { manageClickEvents } from "./components/eventLogic";
import { clearEncryptedBox } from './components/domActions';

const init = () => {
  manageClickEvents();
  clearEncryptedBox();
};

document.addEventListener('DOMContentLoaded', init);
