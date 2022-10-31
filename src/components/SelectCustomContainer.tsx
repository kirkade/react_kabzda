import React, {useState} from 'react';
import styles from './SelectCustom.module.css'
import {SelectCustom} from "./SelectCustom";

export type ItemType = {
    id: number,
    value: string,
}
export type ItemsType = Array<ItemType>

const items: ItemsType = [
    {id: 1, value: 'bulka'},
    {id: 2, value: 'cheburek'},
    {id: 3, value: 'waffle'},
]

export const SelectCustomContainer = () => {

    const [value, setValue] = useState<string>('Click me to change')

    const onChangeHandler = (newValue:string) => {setValue(newValue)}

    return (
        <div className={styles.select}>
           <SelectCustom items={items} value={value} onChange={onChangeHandler}/>
        </div>
    );
};


