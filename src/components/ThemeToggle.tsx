
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative p-2.5 rounded-full transition-all duration-500 bg-secondary/80 text-secondary-foreground 
                hover:bg-primary/10 hover:text-primary hover:scale-110 overflow-hidden
                shadow-md hover:shadow-lg group"
      aria-label="Toggle theme"
    >
      {/* Background glow effect */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
      
      {/* Icons with enhanced animations */}
      <div className="relative z-10">
        {theme === "light" ? (
          <Moon className="h-5 w-5 transition-all duration-500 group-hover:rotate-[360deg]" />
        ) : (
          <Sun className="h-5 w-5 transition-all duration-500 group-hover:rotate-[360deg]" />
        )}
      </div>
    </button>
  );
}
