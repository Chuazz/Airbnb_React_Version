// Component
import LocationItem from "./component/LocationItem.js";

// Data
import locations from "../../db/location.json";

function ContentContainer() {
    return (
        <div id="content">
            <div className="row location__list">
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