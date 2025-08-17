import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./context/UserContext.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/Store.js";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserContext>
      <Provider store={store}>
        <App />
        <Toaster />
      </Provider>
    </UserContext>
  </BrowserRouter>
);
