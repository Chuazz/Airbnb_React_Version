// Framework
import clsx from "clsx";

// Style
import styles from "./NavigationDefault.module.scss"

function NavigationDefault() {
    return (
        <div className={clsx(styles.container)}>
            <div className="row ali-center jus-center">
                <div className={clsx(styles.item, "p-l-24")}>
                    <p>Địa điểm bất kì</p>
                </div>

                <div className={clsx(styles.item)}>
                    <p>Tuần bất kỳ</p>
                </div>

                <div className={clsx(styles.item, "relative")}>
                    <p style={{ color: "var(--gray)" }}>Thêm khách</p>

                    <button className="row ali-center jus-center">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NavigationDefault;