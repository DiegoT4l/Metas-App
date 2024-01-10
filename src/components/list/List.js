import Goal from "./Goal";
import { useContext } from "react";
import { Context } from "../../services/Memory";


function List() {
    const [state, dispatch] = useContext(Context);

    return ( 
        state.orderList.map((id) => <Goal key={id} { ...state.objects[id] } />)
    );
}

export default List;