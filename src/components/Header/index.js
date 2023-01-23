// Framework
import { memo, useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";

// Component
import Logo from "./components/logo/main.js";
import UserFunction from "./components/action/main.js";
import NavigationActive from "./components/Navigation/NavigationActive/main.js";
import NavigationDefault from "./components/Navigation/NavigationDefault/main.js";

// Style
import styles from "./Header.module.scss";

function HeaderContainer() {
    const [navActive, setNavActive] = useState(false);
    const [activeId, setActiveId] = useState("address");
    const headerRef = useRef();

    useEffect(() => {
        function windowHandleClick(e){
            // document.body.addEventListener("click", e => {
            //     if(!headerRef.current.contains(e.target)){
            //         setNavActive(false);
            //     }
            // })
            // console.log(headerRef.current.contains(e.target))
        }

        document.body.addEventListener("click", windowHandleClick);

        return () => {
            document.body.removeEventListener("click", windowHandleClick)
        }
    }, []);

    const itemHandleClick = useCallback((detail) => {
        setNavActive(true)
        setActiveId(detail)
    }, [])

    return (
        <div 
            className={clsx(
                styles.container,
                {
                    [styles.active]: navActive
                }
            )}
            ref={headerRef}
        >
            <div className="row jus-betwwen h-100 p-t-20">
                <div className="h-4" onClick={() => setNavActive(!navActive)}>
                    <Logo />
                </div>

                <div className="h-4">
                    <UserFunction />
                </div>
            </div>
            
            <div className={clsx(styles.nav)}>
                <div 
                    className={clsx(styles.default)}
                >
                    <NavigationDefault onClick={itemHandleClick}/>
                </div>

                <div className={clsx(styles.active)}>
                    <NavigationActive 
                        isActive={navActive} 
                        activeBlockId={activeId}
                    />
                </div>
            </div>
        </div>
    );
}

export default memo(HeaderContainer);