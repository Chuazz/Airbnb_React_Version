// Framework
import clsx from "clsx";

// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Style
import styles from "./Footer.module.scss"

function FooterContainer() {
    return (
        <div id={clsx(styles.footer)}>
            <div className="row ali-center h-100">
                <div className="h-6">
                    <div className={clsx(styles.footerPolicy)}>
                        <div className="row ali-center">
                            <p className="p-r-24">&copy; 2022 Airbnb, Inc.</p>

                            <ul className="row ali-center" style={{ listStyle: "disc" }}>
                                <li>Quyền riêng tư</li>
                                <li>Điều khoản</li>
                                <li>Sơ đồ trang web</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="h-6">
                    <div className={clsx(styles.footerSupport)}>
                        <div className="row ali-center jus-end">
                            <div className={clsx(styles.supportItem)}>
                                <div className="row ali-center">
                                    <div>
                                        <i className="fa-solid fa-globe ma-r-8"></i>
                                    </div>
                                    <p>Tiếng việt(VN)</p>
                                </div>
                            </div>

                            <div className={clsx(styles.supportItem)}>
                                <div className="row ali-center">
                                    <p className="p-r-8">&#8363;</p>
                                    <p>VND</p>
                                </div>
                            </div>

                            <div className={clsx(styles.supportItem)}>
                                <div className="row ali-center">
                                    <p className="p-r-8">Hỗ trợ và tài nguyên</p>
                                    <div>
                                        <FontAwesomeIcon icon="angle-up" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterContainer;