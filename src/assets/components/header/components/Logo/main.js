// Framework
import clsx from "clsx";

// Style
import styles from "./Logo.module.scss"

// Image
import logoImg from "../../../../images/logo.png"

function Logo() {
    return (
        <div className={clsx(styles.container)}>
            <div className="row ali-center">
                <img src={logoImg} alt="" />

                <div className="p-l-4">
                    <p>Airbnb</p>
                </div>
            </div>
        </div>
    );
}

export default Logo;