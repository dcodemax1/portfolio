"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Suppress React DevTools version warnings
if (typeof window !== "undefined") {
  const originalError = console.error;
  console.error = function (...args: any[]) {
    if (
      args[0]?.includes?.("Invalid argument not valid semver") ||
      args[0]?.includes?.("react_devtools") ||
      (typeof args[0] === "string" && args[0].includes("semver")) ||
      (typeof args[0] === "string" && args[0].includes("WebGL context lost"))
    ) {
      return;
    }
    originalError.apply(console, args);
  };
}

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
