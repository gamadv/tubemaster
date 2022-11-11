import { createContext, ReactNode, useContext, useState } from "react";

type ColorProviderProps = {
  mode: string;
  toggleMode: () => void;
  children?: ReactNode;
};

export const ColorModeContext = createContext<ColorProviderProps>(
  {} as ColorProviderProps
);

export function ColorModeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [mode, setMode] = useState("light");

  function toggleMode() {
    if (mode === "dark") setMode("light");
    if (mode === "light") setMode("dark");
  }

  const providerValues = {
    mode,
    toggleMode,
  };

  return (
    <ColorModeContext.Provider value={providerValues}>
      {children}
    </ColorModeContext.Provider>
  );
}

export const useColorMode = () => {
  return useContext(ColorModeContext);
};
