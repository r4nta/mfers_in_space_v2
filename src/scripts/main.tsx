import '../styles/main.scss';

import ReactDOM from 'react-dom';
import Dapp from './react/Dapp';
import Intro from './react/Intro';

document.addEventListener('DOMContentLoaded', async () => {
  ReactDOM.render(<><Intro /><Dapp /></>, document.getElementById('minting-dapp'));
});
