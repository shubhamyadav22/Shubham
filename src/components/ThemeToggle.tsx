
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full transition-all duration-300 bg-secondary text-secondary-foreground 
                hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:rotate-12"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 transition-all duration-500 hover:animate-pulse" />
      ) : (
        <Sun className="h-4 w-4 transition-all duration-500 hover:animate-pulse" />
      )}
    </button>
  );
}
