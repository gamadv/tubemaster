import { ThemeProvider } from "styled-components";
import RegisterVideo from "../components/RegisterVideo";
import { ColorModeProvider, useColorMode } from "../Contexts/ColorMode";

import { CSSReset } from "../styles/global";

const theme = {
  light: {
    backgroundBase: "#f9f9f9",
    backgroundLevel1: "#ffffff",
    backgroundLevel2: "#f0f0f0",
    borderBase: "#e5e5e5",
    textColorBase: "#222222",
  },
  dark: {
    backgroundBase: "#181818",
    backgroundLevel1: "#202020",
    backgroundLevel2: "#313131",
    borderBase: "#383838",
    textColorBase: "#FFFFFF",
  },
};

// _app.js -> Definições globais do NextJS
// ThemeProvider -> Prover o tema para a app toda
// ColorModeProvider -> Prove o state de light ou dark mode para todo mundo
function ProviderWrapper(props: any) {
  return <ColorModeProvider>{props.children}</ColorModeProvider>;
}

function MyApp({ Component, pageProps }) {
  const { mode } = useColorMode();
  return (
    <ThemeProvider theme={theme[mode]}>
      <CSSReset />
      <Component {...pageProps} />
      <RegisterVideo />
    </ThemeProvider>
  );
}
export default function _App(props) {
  return (
    <ProviderWrapper>
      <MyApp {...props} />
    </ProviderWrapper>
  );
}
