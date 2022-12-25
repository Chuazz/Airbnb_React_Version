// Component
import Logo from "./component/Logo.js";
import Navigation from "./component/Navigation.js";
import UserFunction from "./component/UserFunction.js";

function HeaderContainer() {
    return (
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
    );
}

export default HeaderContainer;