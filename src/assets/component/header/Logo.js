import logoImg from "../../image/logo.png"

function Logo() {
    return (
        <div className="header__logo">
            <div className="row ali-center">
                <img src={logoImg} alt="" />

                <div className="p-l-4">
                    <p>Airbnb</p>
                </div>
            </div>
        </div>
    );
}

export default Logo;