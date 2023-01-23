// Framework
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Component
import Calendar from "./Calendar/main.js";


// Style
import styles from "./DatePicker.module.scss";
import { memo, useState } from "react";

function DatepPicker() {
    const [currMonth, setCurrMonth] = useState(new Date().getMonth());
    const [nextMonth, setNextMonth] = useState(currMonth + 1);

    const arrowLeftHandleClick = () => {
        setCurrMonth(currMonth - 1);
        setNextMonth(nextMonth - 1);
    }

    const arrowRightHandleClick = () => {
        setCurrMonth(currMonth + 1);
        setNextMonth(nextMonth + 1);
    }


    return (
        <div className={clsx(styles.container)}>
            <div
                className={clsx(
                    styles.items, "row jus-center"
                )}
            >
                <Calendar
                    id={"currCalendar"}
                    className={clsx(styles.item)}
                    month={currMonth}
                    year={2023}
                />

                <Calendar
                    id={"nextCalendar"}
                    className={clsx(styles.item)}
                    month={nextMonth}
                    year={2023}
                />

                <i 
                    className={clsx(styles.left)}
                    onClick={arrowLeftHandleClick}
                >
                    <FontAwesomeIcon icon="fa-solid fa-angle-left" />
                </i>
                <i 
                    className={clsx(styles.right)}
                    onClick={arrowRightHandleClick}
                >
                    <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                </i>
            </div>
        </div>
    );
}

export default memo(DatepPicker);