// Framework
import { useState, useEffect, memo, useCallback, useRef } from "react";
import clsx from "clsx";

// Component
import CategoryItem from "./components/CategoryItem/main.js"

// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Style
import styles from "./Category.module.scss"

function CategoryContainer() {
    const [types, setTypes] = useState([]);
    const [activeId, setActiveId] = useState(1);
    const [scrolling, setScrolling] = useState(false);
    const [scrollForward, setScrollForward] = useState(0);
    const [scrollBackward, setScrollBackward] = useState(0);

    const bodyRef = useRef();

    const itemHandleClick = useCallback((ref) => {
        setActiveId(+ref.current.dataset.id)
    }, []);

    const bodyHandleClickRight = () => {
        var bodyScrollWitdh = bodyRef.current.offsetWidth;
        var scrollWidth = bodyScrollWitdh * 0.7;

        setScrollForward(prev => {
            if (prev <= bodyRef.current.scrollWidth) {
                prev += scrollWidth;

                if (prev > 0) {
                    setScrolling(true)
                }

                bodyRef.current.scrollLeft = prev;
                setScrollBackward(prev);
            }
            return prev;
        });

    };

    const bodyHandleClickLeft = useCallback(() => {
        var bodyScrollWitdh = bodyRef.current.clientWidth;

        setScrollBackward(prev => {
            prev -= (bodyScrollWitdh * 0.7)

            bodyRef.current.scrollLeft = prev;
            setScrollForward(prev)
            if(prev <= 0 ){
                setScrolling(false);
            }
            return prev;
        });
        
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/types")
            .then(response => response.json())
            .then(data => setTypes(data))
    }, []);

    return (
        <div id={clsx(styles.category)}>
            <div className="row ali-ceter h-100 relative">


                <div
                    className={clsx(styles.body)}
                    ref={bodyRef}
                >
                    <div className="row ali-center flex-nowarp h-100">
                        {types.map((type) => (
                            <CategoryItem
                                key={type.id}
                                type={type}
                                active={activeId === type.id ? true : false}
                                onClick={itemHandleClick}
                            />
                        ))}
                    </div>
                </div>

                <div
                    className={clsx(
                        styles.control, "flex-1",
                        {
                            [styles.scrolling]: scrolling
                        }
                    )}
                >
                    <div className="row ali-center jus-end h-100">
                        <div
                            className={clsx(
                                styles.back, "row ali-center"
                            )}
                        >
                            <div
                                className={clsx(styles.next, styles.arrowBtn)}
                                onClick={bodyHandleClickLeft}
                            >
                                <FontAwesomeIcon icon="angle-left" />
                            </div>
                        </div>

                        <div
                            className={clsx(styles.next, styles.arrowBtn, "ma-r-16")}
                            onClick={bodyHandleClickRight}
                        >
                            <FontAwesomeIcon icon="angle-right" />
                        </div>

                        <div className={clsx(styles.filter, "row ali-center")}>
                            <FontAwesomeIcon icon="sliders" className="p-r-8" />
                            <p>Bộ lọc</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(CategoryContainer);