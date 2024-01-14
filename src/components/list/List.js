import Goal from "./Goal";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Context } from "../../services/Memory";


function List() {
    const [state] = useContext(Context);

    return (
        <>
            {state.orderList.map((id) => <Goal key={id} { ...state.objects[id] } />)}
            <Outlet />
        </>
    );
}
export default List;