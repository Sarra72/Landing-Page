import { createRoot } from "react-dom/client";
import App from "./App";
import './index.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

const root = createRoot(document.getElementById('root'));

root.render(<App/>);