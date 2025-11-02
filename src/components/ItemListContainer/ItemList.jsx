import {Item} from "./Item"

export const ItemList = ({items}) => {
    return(
    !items.length ? (<span>Loading</span>)
    :
    (items.map(item=><Item key = {item.id} item= {item} />))
)}