import { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background: ${(props) => props.theme.colors.white};
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

const theme = {
  colors: {
    white: "#ffffffff",
    primary: "#B6DC76",
    secondary: "#1b2845ff",
    light: "#dcd8e4",
    dark: "#161616",
    danger: "#a71a1a",
    success: "#116e2d",
  },
};

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
