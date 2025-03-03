
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative p-2.5 rounded-full transition-all duration-500 
                bg-secondary/80 text-secondary-foreground overflow-hidden
                hover:bg-primary/10 hover:text-primary hover:scale-110
                shadow-md hover:shadow-lg group"
      aria-label="Toggle theme"
    >
      {/* Enhanced glow effect */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-ring/30 opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500 blur-sm"></span>
      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500"></span>
      
      {/* Icons with enhanced animations */}
      <div className="relative z-10">
        {theme === "light" ? (
          <Moon className="h-5 w-5 transition-all duration-500 group-hover:rotate-[360deg]" />
        ) : (
          <Sun className="h-5 w-5 transition-all duration-500 group-hover:rotate-[360deg]" />
        )}
      </div>
      
      {/* Subtle ring animation */}
      <span className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/20 
                     group-hover:scale-110 transition-all duration-700"></span>
    </button>
  );
}
