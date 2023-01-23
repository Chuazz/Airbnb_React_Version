// Framework
import clsx from "clsx";
import { memo, useEffect, useState } from "react";

// Component
import TabList from "./TabList/main.js"

// Style
import styles from "./NavigationActive.module.scss";

function temp(array, id){
    var result = [];

    array.forEach(t => {
        var temp = t.details.filter(t2 => t2.optionId === id)
        if(temp.length === 1){
            t  = {...t, ...temp[0]};
            temp = [];
        }
        t.details = temp

        result.push(t)
    });

    return result || [];
}


function NavigationActive({ isActive, activeBlockId }) {
    const [activeId, setActiveId] = useState(1);
    const [options, setOptions] = useState([]);
    const [optionDetail, setOptionDetail] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:3000/optionDetail")
            .then(response => response.json())
            .then(data => setOptionDetail(temp(data, activeId)))
    }, [activeId]);

    useEffect(() => {
        fetch("http://localhost:3000/options")
            .then(response => response.json())
            .then(data => setOptions(data))
    }, []);

    return (
        <div 
            className={clsx(
                styles.container
            )}
        >
            <div className={clsx(styles.tabs, "row ali-center jus-center")}>
                {options.map((option, i) => (
                    <div
                        key={i}
                        className={clsx(
                            styles.tabItem,
                            {
                                [styles.active]: option.id === activeId
                            }
                        )}
                        onClick={() => setActiveId(option.id)}
                    >
                        <p>{option.name}</p>
                        <div className={clsx(styles.customeHr)}></div>
                    </div>
                ))}
            </div>
            
            <TabList 
                isActive={isActive} 
                optionDetail={optionDetail}
                activeBlockId={activeBlockId}
            />
        </div>
    );
}

export default memo(NavigationActive);