// Framework
import clsx from "clsx";
import { memo, useRef } from "react";

// Style
import styles from "./CategoryItem.module.scss"

function CategoryItem({type, active, onClick}){
    const itemRef = useRef();

    return (
        <div 
            className={clsx(
                styles.item, "h-100",
                {
                    [styles.active]: active 
                })
            }
            data-id={type.id}
            onClick={e => onClick(itemRef)}
            ref={itemRef}
        >
            <div className="row flex-column ali-center jus-center h-100">
                <div>
                    <img src={type.image} alt={type.name} />
                </div>

                <div>
                    <p>{type.name}</p>
                </div>
            </div>
        </div>
    );
}

export default memo(CategoryItem);