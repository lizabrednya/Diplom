import { StyledComponentProps, StyledEngineProvider } from "@mui/material/styles";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";
// import { rootStore } from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StyledEngineProvider injectFirst>
    {/* <Provider store={rootStore}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </Provider> */}
  </StyledEngineProvider>
);