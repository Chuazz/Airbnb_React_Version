// Framework
import { useEffect, useState } from "react";
import clsx from "clsx";

// Component
import LocationItem from "./components/LocationItem/main.js";

// Image
import logoImg from "../../images/logo.png"

// Style
import styles from "./Content.module.scss"

function ContentContainer() {
    const [locations, setLocations] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/locations")
            .then(response => response.json())
            .then(data => {
                setLoader(false)
                return setLocations(data);
            })
    }, []); 

    return (
        <div id={clsx(styles.content)}>
            {loader && 
                <div className="layout row ali-center jus-center">
                    <img src={logoImg} alt={logoImg} />
                </div>
            }

            <div className={clsx(styles.locationList, "row")}>
                {locations.map((location, index) => (
                    <div className="h-3" key={index}>
                        <LocationItem location={location} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ContentContainer;