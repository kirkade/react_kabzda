
type AccordionTitlePropsType = {
        title: string
        onClick: () => void
}



export const AccordionTitle = (props:AccordionTitlePropsType) => {
    return (
        <h1 onClick={props.onClick}>{props.title}</h1>
    )
}