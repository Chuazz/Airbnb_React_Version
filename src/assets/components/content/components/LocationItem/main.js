// Framework
import { Carousel, Card } from "react-bootstrap";
import clsx from "clsx";

// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Style
import styles from "./LocationItem.module.scss"

function LocationItem({ location }) {
    const nextIcon = (
        <div className={clsx(styles.arrowBtn)}>
            <FontAwesomeIcon icon="angle-right" />
        </div>
    );

    const prevIcon = (
        <div className={clsx(styles.arrowBtn)}>
            <FontAwesomeIcon icon="angle-left" />
        </div>
    );

    return (
        <div className={clsx(styles.locationItem)}>
            <Card>
                <Carousel interval={null} nextIcon={nextIcon} prevIcon={prevIcon} >
                    {location.images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <Card.Img src={image} />
                        </Carousel.Item>
                    ))}
                </Carousel>

                <div className="row jus-betwwen p-t-12">
                    <div className={clsx(styles.locationInfo)} style={{ flexBasis: "80%" }}>
                        <p className={clsx(styles.title)}>{location.name}</p>
                        <p className={clsx(styles.subTitle)}>{location.view}</p>
                        <p className={clsx(styles.subTitle)}>{location.begin}</p>
                        <p className={clsx("price")}>{location.price} <span>đêm</span></p>
                    </div>

                    <div className={clsx(styles.locationRate, "flex-1")}>
                        <div className="row ali-center jus-end">
                            <FontAwesomeIcon icon="star" />
                            <p>{location.rate}</p>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default LocationItem;