// Component
import CategoryItem from "./CategoryItem.js";

// Bootstap
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

var carouselItems = [];
var temp = [];

function CarouselCategory() {
    const [index, SetIndex] = useState(0);
    const [types, setTypes] = useState([]);

    const handleSelect = (selectedIndex) => {
        SetIndex(selectedIndex);
    }

    useEffect(() => {
        fetch("http://localhost:3000/types")
            .then(response => response.json())
            .then(data => setTypes(data))
    }, []);

    types.forEach((curr, index) => {
        if (index > 0) {
            if (index % 8 === 0) {
                temp.push(types.splice(0, index))
            }
        }
    });

    carouselItems = temp.concat([types]);

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} >
            {carouselItems.map((carouselItem, i) => (
                <Carousel.Item key={i}>
                    <div className="row ali-center">
                        {carouselItem.map((item, j) => (
                            <CategoryItem
                                key={j}
                                type={item}
                            />
                        ))}
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default CarouselCategory;