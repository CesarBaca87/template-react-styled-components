import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/normalize.css';

const container = document.getElementById('root');

createRoot(container).render(<App />);
