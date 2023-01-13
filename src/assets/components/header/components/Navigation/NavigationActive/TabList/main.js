// Framework
import { useState, memo } from "react";
import clsx from "clsx";

// Component
import TabItem from "./TabItem/main.js"

// Style
import styles from "./TabList.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TabList({ isActive, optionDetail }) {
    const [activeName, setActiveName] = useState("address");

    const itemHandleClick = (name) => {
        setActiveName(name)
    }

    return (
        <div 
            className={clsx(
                styles.container,
                {
                    [styles.active]: isActive
                }
            )}
        >
            <div className={clsx(styles.items)}>
                <div
                    className={clsx(
                        styles.item, "row ali-center",
                    )}
                >
                    {optionDetail.map(itemDetail => (
                        <TabItem
                            key={Math.random()}
                            className={clsx(styles.itemDetail)}
                            data={itemDetail}
                            activeName={activeName}
                            onClick={itemHandleClick}
                        />
                    ))}
                </div>
            </div>

            <button 
                className={clsx(
                    styles.searchBtn, "row ali-center jus-center"
                )}
            >
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                <p>Tìm kiếm</p>
            </button>
        </div>
    );
}

export default memo(TabList);