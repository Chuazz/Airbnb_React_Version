// Component
import CategoryItem from "./component/CategoryItem.js";

// Data
import types from "../../db/type.json"

// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function CategoryContainer(){
    return (
        <div id="category">
            <div className="row ali-ceter h-100">
                <div className="category__body">
                    <div className="row ali-center flex-nowarp h-100">
                        {types.map((type, index) => (
                            <CategoryItem key={index} type={type} />
                        ))}
                    </div>
                </div>

                <div className="category__control flex-1">
                    <div className="row ali-center jus-end h-100">
                        <div className="category__next arrow-btn ma-r-16">
                            <FontAwesomeIcon icon="angle-right" />
                        </div>

                        <div className="category__filter row ali-center">
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