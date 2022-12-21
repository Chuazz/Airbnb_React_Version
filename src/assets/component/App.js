// Component
import Logo from "./header/Logo.js";
import Navigation from "./header/Navigation.js";
import UserFunction from "./header/UserFunction.js";
import Category from "./header/Category.js";

// Data
import types from "../db/type.json"

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

            <div id="category">
                <div className="row ali-center flex-nowarp h-100 category__body">
                    {types.map((type, index) => (
                        <div>
                            <Category key={index} type={type} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;