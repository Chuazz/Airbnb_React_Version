// FrameWork
import clsx from "clsx";
import { memo, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Function
import RenderCalendar from "../../../../../../../../../../js/Calendar";

// Style
import styles from "./Calendar.module.scss";

function Calendar({ id, className, arrowLeft = false, arrowRight = false, isCurrent }) {
    const [currMonth, setCurrMonth] = useState(new Date().getMonth());
    const [currYear, setCurrYear] = useState(new Date().getFullYear());
    const [isCurr, setIsCurr] = useState(isCurrent);

    const calendarRef = useRef();

    useEffect(() => {
        RenderCalendar(calendarRef.current.id, currMonth, currYear, isCurr);
    });

    return (
        <div
            id={id}
            className={clsx(styles.calendar, className)}
            ref={calendarRef}
        >
            <div className={clsx(styles.heading, "relative")}>
                <p className={clsx(styles.title, "title")}></p>

                {arrowLeft &&
                    <i className={clsx(styles.left)}>
                        <FontAwesomeIcon icon="fa-solid fa-angle-left" />
                    </i>
                }

                {arrowRight &&
                    <i className={clsx(styles.right)}>
                        <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                    </i>
                }
            </div>

            <div className={clsx(styles.weeks)}>
                <p>T2</p>
                <p>T3</p>
                <p>T4</p>
                <p>T5</p>
                <p>T6</p>
                <p>T7</p>
                <p>CN</p>
            </div>

            <div className={clsx(styles.days, "days")}>
            </div>
        </div>
    );
}

export default memo(Calendar);