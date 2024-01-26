import { createRoot } from "react-dom/client";
import "./index.css";

import { App } from "./App";
import registerServiceWorker from "./registerServiceWorker";

const root = document.getElementById("root");

if (root) createRoot(root).render(<App />);

registerServiceWorker();
