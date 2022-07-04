import { createRoot } from 'react-dom/client';
import App from './cpmponents/app/';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
