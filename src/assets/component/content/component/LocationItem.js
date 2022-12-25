// Framework
import { Carousel, Card } from "react-bootstrap";

// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LocationItem({ location }) {
    const nextIcon = (
        <div className="arrow-btn">
            <FontAwesomeIcon icon="angle-right" />
        </div>
    );

    const prevIcon = (
        <div className="arrow-btn">
            <FontAwesomeIcon icon="angle-left" />
        </div>
    );

    return (
        <div className="location__item">
            <Card>
                <Carousel interval={null} nextIcon={nextIcon} prevIcon={prevIcon} >
                    {location.images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <Card.Img src={image} />
                        </Carousel.Item>
                    ))}
                </Carousel>

                <div className="row jus-betwwen p-t-12">
                    <div className="location__info" style={{ flexBasis: "80%" }}>
                        <p className="title">{location.name}</p>
                        <p className="sub-title">{location.view}</p>
                        <p className="sub-title">{location.begin}</p>
                        <p className="price">{location.price} <span>đêm</span></p>
                    </div>

                    <div className="flex-1 location__rate">
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