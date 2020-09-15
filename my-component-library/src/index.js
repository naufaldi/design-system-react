import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton from './components/Button.js'
const App = () => <PrimaryButton>Hello world</PrimaryButton>;

ReactDOM.render(<App />, document.querySelector("#root"));