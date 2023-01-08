// Framework
import { useState } from "react";
import clsx from "clsx";

// Component
import Logo from "./components/Logo/main.js";
import UserFunction from "./components/Action/main.js";
import Navigation from "./components/Navigation/main.js";

// Style
import styles from "./Header.module.scss";

function HeaderContainer() {
    const [navActive, setNavActive] = useState(false);

    function handleClick(){
        setNavActive(!navActive)
    }

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
            
            <Navigation onClick={handleClick}/>
        </div>
    );
}

export default HeaderContainer;