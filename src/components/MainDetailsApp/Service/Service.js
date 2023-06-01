import { Link } from "react-router-dom";

export default function Service(props) {
    const { id, name } = props.item;

    return (
        <li className="service" data-id={id}>
            <Link to={`/ra-redux-observable/main-details/:${id}/details`}>{name}</Link>
        </li>
    )
}