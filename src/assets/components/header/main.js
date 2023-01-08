// Framework
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

// Component
import Logo from "./components/Logo/main.js";
import UserFunction from "./components/Action/main.js";
import NavigationActive from "./components/Navigation/NavigationActive/main.js";
import NavigationDefault from "./components/Navigation/NavigationDefault/main.js";

// Function
import { getParentElement } from "../../js/function.js";

// Style
import styles from "./Header.module.scss";

function HeaderContainer() {
    const [navActive, setNavActive] = useState(false);
    const navRef = useRef();

    useEffect(() => {
        function windowHandleClick(e){
            if(getParentElement(e.target, `.${styles.nav}`) === undefined){
                setNavActive(false);    
            }
        }

        window.addEventListener("click", windowHandleClick);

        return () => {
            window.removeEventListener("click", windowHandleClick)
        }
    }, []);

    return (
        <div 
            id={clsx(styles.header)}
            className={clsx({
                [styles.active]: navActive
            })}
        >
            <div className="row jus-betwwen h-100 p-t-20">
                <div className="h-4">
                    <Logo />
                </div>

                <div className="h-4">
                    <UserFunction />
                </div>
            </div>
            
            <div className={clsx(styles.nav)}>
                <div 
                    className={clsx(styles.default)}
                    onClick={() => setNavActive(true)}
                    ref={navRef}
                >
                    <NavigationDefault/>
                </div>

                <div className={clsx(styles.active)}>
                    <NavigationActive />
                </div>
            </div>
        </div>
    );
}

export default HeaderContainer;