// Framework
import { memo } from "react";
import clsx from "clsx";

// Style
import styles from "./TabItem.module.scss"

function TabItem({ data, activeName, onClick }) {
    return (
        <>
            {data.details.length <= 1 ?
                <div className={clsx(styles.container)}>
                    <div
                        className={clsx(styles.item,
                            {
                                [styles.active]: activeName === data.detail
                            }
                        )}
                        onClick={() => onClick(data.detail)}
                    >
                        <p>{data.name}</p>
                        <input type="text" disabled={data.disabled} placeholder={data.placeholder} />
                    </div>
                </div>
                :
                <div
                    className={clsx(
                        styles.specialContainer, styles.container,
                        "row ali-center"
                    )}
                >
                    {data.details.map(detail => (
                        <div
                            key={detail.name}
                            className={clsx(styles.item,
                                {
                                    [styles.active]: activeName === detail.detail
                                }
                            )}
                            onClick={() => onClick(detail.detail)}
                        >
                            <p>{detail.name}</p>
                            <input type="text" disabled={detail.disabled} placeholder={detail.placeholder} />
                        </div>
                    ))}
                </div>
            }
        </>
    );
}

export default memo(TabItem);