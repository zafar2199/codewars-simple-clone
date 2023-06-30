import ReactDOM from "react-dom/client";

import "./styles/main.scss";
import App from "./App";
import AuthProvider from "./context/AuthProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <AuthProvider>
        <App />
    </AuthProvider>
);
