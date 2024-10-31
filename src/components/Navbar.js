import styles from "./Navbar.module.css";
import React, { useState, useEffect } from "react";
import logo from "./LOGO.png";

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const handleMenuClick = () => {
        setIsActive((prevState) => !prevState);
    };

    const handleDarkMode = () => {
        setIsDarkMode((prevState) => !prevState);
    };

    useEffect(() => {
        document.body.style.backgroundColor = isDarkMode ? 'black' : 'white';
        document.body.style.color = isDarkMode ? 'white' : 'black';

        return () => {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        };
    }, [isDarkMode]);

    return (
        <>
            <div className={styles.nav}>
                <img src={logo} alt="Logo" />
                <div className={styles.listnormal}>
                    <ul>
                        <li><a href="#Homepage">Home</a></li>
                        <li><a href="#jobs">Locations</a></li>
                        <li><a href="#jobs">Jobs</a></li>
                        <li><a href="#jobs">Benefits</a></li>
                    </ul>
                </div>
                <div className={styles.second}>
                    <button className={styles.themeToggle} onClick={handleDarkMode}>
                        {isDarkMode ? "🌙" : "☀️"}
                    </button>

                    <div className={`${styles.list} ${isActive ? styles.active : ""}`}>
                        <ul>
                            <li><a href="#Homepage">Home</a></li>
                            <li><a href="#jobs">Locations</a></li>
                            <li><a href="#jobs">Jobs</a></li>
                            <li><a href="#jobs">Benefits</a></li>
                        </ul>
                    </div>

                    <nav>
                        <div className={`${styles.hammenu} ${isActive ? styles.active : ""}`}
                            onClick={handleMenuClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
