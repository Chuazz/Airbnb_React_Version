// Framework
import clsx from "clsx";
import { memo, useEffect, useState } from "react";

// Component
import Accommodation from "./Accommodation/main.js";

// Style
import styles from "./NavigationActive.module.scss";

function NavigationActive() {
    const [options, setOptions] = useState([]);
    const [activeOption, setActiveOption] = useState(1);
    const [activeOptionBlock, setActiveOptionBlock] = useState(1);

    useEffect(() => {
        fetch("http://localhost:3000/options")
            .then(response => response.json())
            .then(data => setOptions(data))
    }, []);

    const itemHandleClick = (id) => {
        setActiveOption(id)
    }

    return (
        <div className={clsx(styles.container)}>
            <div className="row ali-center jus-center">
                {options.map(option => (
                    <div 
                        key={option.id} 
                        className={clsx(
                            styles.item,
                            {
                                [styles.active]: option.id === activeOption
                            }
                        )}
                        onClick={() => itemHandleClick(option.id)}
                    >
                        <p>{option.name}</p>
                        <div className={clsx(styles.customeHr)}></div>
                    </div>
                ))}
            </div>

            <div className={clsx(styles.activeBlock)}>
                <Accommodation />
            </div>
        </div>
    );
}

export default memo(NavigationActive);