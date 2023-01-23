// Framework
import { useState, memo } from "react";
import clsx from "clsx";

// Component
import TabItem from "./TabItem/main.js";
import Search from "./TabDetail/Search/main.js";
import DatePicker from "./TabDetail/DatePicker/main.js";

// Style
import styles from "./TabList.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TabList({ isActive, optionDetail, activeBlockId }) {
    const [activeName, setActiveName] = useState(activeBlockId);

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
            <div>
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

            <div className={clsx(styles.itemActions)}>
                <div 
                    className={clsx(
                        styles.itemACtion,
                        {
                            [styles.active]: activeName === "address"
                        }
                    )}
                >
                    <Search />
                </div>
                <div 
                    className={clsx(
                        styles.itemACtion,
                        {
                            [styles.active]: activeName === "experience"
                        }
                    )}
                >
                    <DatePicker />
                </div>
                {/* <div 
                    className={clsx(
                        styles.itemACtion,
                        {
                            [styles.active]: activeName === "address"
                        }
                    )}
                >
                    <DatePicker />
                </div>
                <div 
                    className={clsx(
                        styles.itemACtion,
                        {
                            [styles.active]: activeName === "address"
                        }
                    )}
                >
                    <Search />
                </div> */}
            </div>
        </div>
    );
}

export default memo(TabList);