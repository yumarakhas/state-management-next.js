'use client';

import { useTheme } from "./ThemeContext";

export default function ThemeToggle(){
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            current Theme: {theme} (Click to toggle)
        </button>
    );
}