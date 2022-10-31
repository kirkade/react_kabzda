import React, {useEffect, useState} from 'react';
import styles from './SelectCustom.module.css'
import {ItemsType} from "./SelectCustom.stories";

type SelectCustomPropsType = {
    items: ItemsType,
    value: string,
    onChange: (value: string) => void
}

export const SelectCustom = (props: SelectCustomPropsType) => {

    const [active, setActive] = useState<boolean>(false)
    const [hovered, setHovered] = useState(props.value)

    const selectedItem = props.items.find(i=>i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hovered)

    useEffect(
        () => {
            setHovered(props.value)
        }, [props.value]
    )
    const toggleItems = () => setActive(!active)

    const onClickItem = (title: string) => {
        props.onChange(title)
        setActive(false)
    }

    const onKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hovered) {
                    const nextElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (nextElement) {
                        props.onChange(nextElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }

    }

    return (
        <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={styles.main} onClick={toggleItems}>{props.value}</span>
            {
                active &&
                <div className={styles.items}>
                    {props.items.map(el => <div
                        onMouseEnter={() => setHovered(el.value)}
                        className={styles.item + ' ' + (hoveredItem === el ? styles.selected : '')}
                        onClick={() => onClickItem(el.value)}
                        key={el.id}>{el.value}</div>)}
                </div>
            }

        </div>
    );
};


