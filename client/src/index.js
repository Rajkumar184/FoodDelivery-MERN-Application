import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { store, persistor } from "./Redux/store";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

// import Demos from "./demo/Demos";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
				{/* <Demos /> */}
			</PersistGate>
		</Provider>
		<ToastContainer className="foo" style={{ fontWeight: "bold" }} />
	</React.StrictMode>,
	document.getElementById("root")
);
