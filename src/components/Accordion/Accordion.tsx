import {useReducer} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import {reducer, TITLE, TOGGLE_COLLAPSED} from "./reducer";


export const Accordion = () => {

    let [state,dispatch] = useReducer(reducer, {collapsed:false})

    return (
        <div>
            <AccordionTitle title={TITLE} onClick={()=>dispatch({type:TOGGLE_COLLAPSED})}/>

            { state.collapsed && <AccordionBody/>}
        </div>
    )
}