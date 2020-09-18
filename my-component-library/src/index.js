import React,{ useState} from "react";
import ReactDOM from "react-dom";
import {SignUpModal} from './components/Modal'
import { ThemeProvider } from "styled-components";
import { GlobalStyle, darkTheme, defaultThemes } from './utils'
const App = () => {
  const [useDarkTheme, setUseDarkTheme]= useState(false);

  return (
    (
     <ThemeProvider theme={useDarkTheme ? darkTheme : defaultThemes }>
     <button
        style={{
          margin: "0 16px 24px",
          padding: "8px",
          background: "none",
          cursor: "pointer",
          border: "2px solid #000",
          marginTop: "60px"
        }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark theme
      </button>
      <button
        style={{
          margin: "0 16px 24px",
          padding: "8px",
          background: "none",
          cursor: "pointer",
          border: "2px solid #000",
          marginTop: "60px"
        }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default theme
      </button>
        <div
        style={{
          background: useDarkTheme ? defaultThemes.primaryColor : darkTheme.primaryColor,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around"
        }}
        >
        {/* <PrimaryButton>Hello world</PrimaryButton>
        <SecondaryButton>Hello World</SecondaryButton>
        <PrimaryButton modifiers={["small", "warning"]}>Hello World small</PrimaryButton>
        <SecondaryButton modifiers='large'>Goodbye World</SecondaryButton> */}
        <SignUpModal/>
        
        </div>

        <GlobalStyle/>
     </ThemeProvider>
    )
    
  )
}
ReactDOM.render(<App />, document.querySelector("#root"));