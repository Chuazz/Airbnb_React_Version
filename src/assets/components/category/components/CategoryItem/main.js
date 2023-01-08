// Framework
import clsx from "clsx";

// Style
import styles from "./CategoryItem.module.scss"

function CategoryItem({type}){
    return (
        <div className={clsx(styles.categoryItem , "h-100")}>
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

export default CategoryItem;