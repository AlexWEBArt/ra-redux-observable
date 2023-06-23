import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { servicesRequest } from "../../../redux/actions/actionCreatorsServices/actionCreatorsServices"
import Service from "../Service/Service"

export default function ServicesList() {
    const { items } = useSelector(state => state.services);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(servicesRequest())
    }, [dispatch]);

    return (
        <ul className="services-list">
            {items.map(item => <Service key={item.id} item={item}/>)}
        </ul>
    )
}