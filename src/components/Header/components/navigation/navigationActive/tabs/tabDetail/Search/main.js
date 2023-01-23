// FrameWork
import { memo, useEffect, useState } from "react";
import clsx from "clsx";

//Style
import styles from "./Search.module.scss";

function Search(){
    const [regions, setRegions] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/regions")
            .then(response => response.json())
            .then(data => setRegions(data))
    }, []);

    return(
        <div className={clsx(styles.container)}>
            <p className={clsx(styles.title)}>Tìm kiếm theo khu vực</p>

            <div className={clsx(styles.items, "row ali-center")}>
                {regions.map(region => (
                    <div 
                        key={region.name}
                        className={clsx(styles.item, "h-4")}
                    >
                        <img src={region.image} alt={region.name} />
                        <p>{region.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default memo(Search);