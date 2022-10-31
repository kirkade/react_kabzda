import React, {useState} from 'react';

import {SelectCustom} from "./SelectCustom";

export default {
    title: 'SelectCustom',
    component: SelectCustom,
}

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

export const Select = () => {
    const [value, setValue] = useState<string>('Click me to change')

    const onChangeHandler = (newValue:string) => {setValue(newValue)}

    return (
        <SelectCustom items={items} value={value} onChange={onChangeHandler}/>
    )
}

