import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./contexts/userContext.jsx";
import { SearchProvider } from "./contexts/searchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <SearchProvider>
      <App />
    </SearchProvider>
  </UserProvider>
);
