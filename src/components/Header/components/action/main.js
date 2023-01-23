// Framework
import clsx from "clsx";

// Style
import styles from "./Action.module.scss";

function UserFunction(){
    return (
        <div className={clsx(styles.headerFunction)}>
            <div className="row ali-center jus-end">
                <div className={clsx(styles.functionItem)}>
                    <p>Cho thuê chỗ ở qua Airbnb</p>
                </div>

                <div className={clsx(styles.functionItem)}>
                    <i className="fa-solid fa-globe"></i>
                </div>

                <div className={clsx(styles.functionItem)}>
                    <div className={clsx(styles.userAccount, "relative")}>
                        <div className="row ali-center">
                            <i className="fa-solid fa-bars"></i>

                            <i className="fa-solid fa-circle-user"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserFunction;