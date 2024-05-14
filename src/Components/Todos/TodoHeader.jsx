import { useEffect, useState } from "react";
import { IconsMoon } from "../IconsMoon";
import { IconsSun } from "../IconsSun";

const InitialDarkMode = localStorage.getItem("theme") === "dark" ? true : false;

export const TodoHeader = () => {
    const [darkMode, setDarkMode] = useState(InitialDarkMode);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <header className="container mx-auto w-[95%] max-w-[800px] pt-8 ">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold uppercase tracking-[0.3em] text-white">
                    todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? (
                        <IconsSun></IconsSun>
                    ) : (
                        <IconsMoon fill={"000"}></IconsMoon>
                    )}
                </button>
            </div>
        </header>
    );
};
