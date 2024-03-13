"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IoMoonSharp } from "react-icons/io5";
import { MdSunny } from "react-icons/md";


const ThemeButton = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div>
            <button className="w-10 h-10 rounded-full border flex justify-center items-center" onClick={() => setTheme(theme === "dark"?"light":"dark")}>
                {
                    theme === "dark" ?
                        <MdSunny size={20}/>
                        :
                        <IoMoonSharp size={20} />
                }
            </button>
        </div>
    );
};

export default ThemeButton;