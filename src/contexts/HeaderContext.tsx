"use client";
import { createContext } from "react";

type HeaderContextProps = {
  showHeader: boolean;
  light: boolean;
  setShowHeader: (showHeader: boolean) => void;
  setLight: (light: boolean) => void;
};

const example = {
  showHeader: true,
  light: true,
  setShowHeader: () => {},
  setLight: () => {},
}

const HeaderContext = createContext<HeaderContextProps>(example);

export default HeaderContext;
