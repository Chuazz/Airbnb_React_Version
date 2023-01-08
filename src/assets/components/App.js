// Framework
import "bootstrap/dist/css/bootstrap.min.css";

// Component
import GlobalStyle from "./globalStyle/main.js";
import HeaderContainer from "./header/main.js";
import CategoryContainer from "./category/main.js";
import ContentContainer from "./content/main.js";
import FooterContainer from "./footer/main.js";

// Icon
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSliders, faAngleRight, faAngleLeft, faStar, faAngleUp } from "@fortawesome/free-solid-svg-icons";
library.add(faSliders, faAngleRight, faAngleLeft, faStar, faAngleUp)

function App() {
    return (
        <GlobalStyle>
            <div className="grid wide">
                <HeaderContainer />

                <CategoryContainer />

                <ContentContainer />

                <FooterContainer />
            </div>
        </GlobalStyle>
    );
}

export default App;