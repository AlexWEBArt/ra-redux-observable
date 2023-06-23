import { useDispatch } from "react-redux";
import { serviceDetailsRequest, servicesRequest } from "../../../redux/actions/actionCreatorsServices/actionCreatorsServices";
import { useParams } from "react-router";
import './errorMessage.css';

export default function ErrorMessage(props) {
    const { message } = props;
    const {id} = useParams();
    const dispatch = useDispatch();

    const handleClickRetry = () => {
        if (id) {
            dispatch(serviceDetailsRequest(id[1]))
        } else {
            dispatch(servicesRequest())
        }
    };
    return (
        <div className="error-message">
            <p className="error-text">Произошла ошибка: {message}</p>
            <button className="btn-retry" onClick={handleClickRetry}>Повторить</button>
        </div>
    )
}