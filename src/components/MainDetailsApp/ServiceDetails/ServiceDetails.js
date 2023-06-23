import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router";
import { serviceDetailsRequest } from "../../../redux/actions/actionCreatorsServices/actionCreatorsServices";
import { useEffect } from "react";

export default function ServiceDetails() {
    const { details } = useSelector(state => state.services);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(serviceDetailsRequest(id[1]))
    }, [dispatch, id]);

    return (
        details &&
        <div className="details-contsiner">
            <h1>{details.items.name}</h1>
            <p>{details.items.content}</p>
            <p>{details.items.price}</p>
        </div>
    )
}