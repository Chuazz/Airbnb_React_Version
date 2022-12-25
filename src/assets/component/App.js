// Framework
import "bootstrap/dist/css/bootstrap.min.css";

// Component
import HeaderContainer from "./header/HeaderContainer.js";
import CategoryContainer from "./category/CategoryContainer.js";
import ContentContainer from "./content/ContentContainer.js";
import FooterContainer from "./footer/FooterContainer.js";

// Test
import Test from "./Text.js";

// Css
import "../../assets/css/base.css";
import "../../assets/css/m_p.css";
import "../../assets/css/main.css";
import "../../assets/css/responsive.css"

// Icon
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSliders, faAngleRight, faAngleLeft, faStar, faAngleUp } from "@fortawesome/free-solid-svg-icons";
library.add(faSliders, faAngleRight, faAngleLeft, faStar, faAngleUp)

function App() {
    return (
        <div className="grid wide">
            <HeaderContainer />

            <CategoryContainer />

            <ContentContainer />

            <FooterContainer />
            {/* <Test/> */}
        </div>
    );
}

export default App;