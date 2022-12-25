// Component
import CategoryItem from "./CategoryItem.js";

// Bootstap
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// Data
import types from "../../../db/type.json"

var carouselItems = [];
var temp = [];

function CarouselCategory() {
    const [index, SetIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        SetIndex(selectedIndex);
    }

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