import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { useCallback } from "react";

export const ModeToggle = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = useCallback(() => { setTheme(theme === "light" ? "dark" : "light"); }, [theme, setTheme]);

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <Sun className={`h-[1.2rem] w-[1.2rem] transition-transform duration-300 ${theme === "light" ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`} />
      <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-transform duration-300 ${theme === "light" ? "rotate-90 scale-0" : "rotate-0 scale-100"}`} />
    </Button>
  );
}
