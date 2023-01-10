// Framework
import { memo } from "react";
import clsx from "clsx";

// Data
import data from "./data.json" ;

// Style
import styles from "./Accommodation.module.scss"

function Accommodation() {
    return (
        <div className={clsx(styles.container, "row", "ali-center")}>
            {data.filters.map(filter => (
                <div
                    key={filter.id}
                    className={clsx(styles.item)}
                >
                    <p>{filter.name}</p>
                </div>
            ))}
        </div>
    );
}

export default memo(Accommodation);