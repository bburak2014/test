 import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import store from "./store.js";
import { Provider } from "react-redux";
import "./i18n";

createRoot(document.getElementById("root")).render(
     <Provider store={store}>
      <App />
    </Provider>
 );
