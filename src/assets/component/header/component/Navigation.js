
function Navigation() {
    return (
        <div className="header__nav">
            <div className="row ali-center jus-center">
                <div className="nav__item p-l-24">
                    <p>Địa điểm bất kì</p>
                </div>

                <div className="nav__item">
                    <p>Tuần bất kỳ</p>
                </div>
                
                <div className="nav__item relative">
                    <p style={{color: "var(--gray)"}}>Thêm khách</p>
                    
                    <button className="row ali-center jus-center">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navigation;