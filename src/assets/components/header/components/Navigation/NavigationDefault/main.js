// Framework
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { memo } from "react";

// Data
import data from "./data.json"

// Style
import styles from "./NavigationDefault.module.scss"

function NavigationDefault({ onClick }) {
    const itemHandleClick = (id) => {
        onClick(id);
    }

    return (
        <div className={clsx(styles.container)}>
            <div className={clsx(styles.titles, "row ali-center jus-center")}>
                {data.titles.map(item => (
                    <div
                        key={item.id}
                        className={clsx(
                            styles.title,
                            {
                                ["relative"]: item.special
                            }
                        )}
                        onClick={() => itemHandleClick(item.id)}
                    >
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>

            <button 
                className={clsx(
                    styles.searchBtn, 
                    "row ali-center jus-center"
                )}
            >
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>
        </div>
    );
}

export default memo(NavigationDefault);