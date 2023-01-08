// Framework
import { useState, useEffect } from "react";
import clsx from "clsx";

// Component
import CategoryItem from "./components/CategoryItem/main.js"

// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Style
import styles from "./Category.module.scss"

function CategoryContainer(){
    const [types, setTypes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/types")
            .then(response => response.json())
            .then(data => setTypes(data))
    }, []);

    return (
        <div id={clsx(styles.category)}>
            <div className="row ali-ceter h-100">
                <div className={clsx(styles.body)}>
                    <div className="row ali-center flex-nowarp h-100">
                        {types.map((type, index) => (
                            <CategoryItem key={index} type={type} />
                        ))}
                    </div>
                </div>

                <div className={clsx(styles.control, "flex-1")}>
                    <div className="row ali-center jus-end h-100">
                        <div className={clsx(styles.next, styles.arrowBtn,"ma-r-16")}>
                            <FontAwesomeIcon icon="angle-right" />
                        </div>

                        <div className={clsx(styles.filter, "row ali-center")}>
                            <FontAwesomeIcon icon="sliders" className="p-r-8"/>
                            <p>Bộ lọc</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryContainer;