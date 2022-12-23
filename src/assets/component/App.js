// Framework
import "bootstrap/dist/css/bootstrap.min.css";

// Component
import Logo from "./header/Logo.js";
import Navigation from "./header/Navigation.js";
import UserFunction from "./header/UserFunction.js";
import CategoryItem from "./category/CategoryItem.js";
import LocationItem from "./content/LocationItem.js";

// Css
import "../../assets/css/base.css";
import "../../assets/css/m_p.css";
import "../../assets/css/main.css";
import "../../assets/css/responsive.css"

// Data
import types from "../db/type.json";
import locations from "../db/location.json";

// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSliders, faAngleRight, faAngleLeft, faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faSliders, faAngleRight, faAngleLeft, faStar)

function App() {
    return (
        <div className="grid wide">
            <div id="header">
                <div className="row ali-center jus-center h-100">
                    <div className="h-4">
                        <Logo />
                    </div>

                    <div className="h-4">
                        <Navigation />
                    </div>

                    <div className="h-4">
                        <UserFunction />
                    </div>
                </div>
            </div>

            <div id="category" className="relative">
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

            <div id="content">
                <div className="row location__list">
                    {locations.map((location, index) => (
                        <div className="h-3" key={index}>
                            <LocationItem location={location} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;