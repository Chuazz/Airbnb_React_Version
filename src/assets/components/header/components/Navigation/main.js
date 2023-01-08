// Framework
import { useState } from "react";
import clsx from "clsx";

// Component
import NavigationDefault from "./NavigationDefault/main.js";
import NavigationActive from "./NavigationActive/main.js";

// Style
import styles from "./Navigation.module.scss";

function Navigation({onClick}) {
    const [navActive, setNavActive] = useState(false);

    function handleClick(){
        onClick();
        setNavActive(!navActive)
    }

    return (
        <div className={clsx(styles.container)}>
            <div
                className={clsx(styles.body)}
                onClick={handleClick}
            >
                {navActive ? <NavigationActive /> : <NavigationDefault />}
            </div>
        </div>
    );
}

export default Navigation;