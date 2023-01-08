// Framework
import clsx from "clsx";

// Style
import styles from "./NavigationActive.module.scss";

function NavigationActive() {
    return (
        <div
            className={clsx(styles.container)}
        >
            <div className="row ali-center jus-center">
                <div className={clsx(styles.item, "p-l-24")}>
                    <p>Chỗ ở</p>
                </div>

                <div className={clsx(styles.item)}>
                    <p>Trải nghiệm</p>
                </div>

                <div className={clsx(styles.item)}>
                    <p>Trải nghiệm trực tuyến</p>
                </div>
            </div>
        </div>
    );
}

export default NavigationActive;