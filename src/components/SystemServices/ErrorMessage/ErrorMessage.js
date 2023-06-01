import { useDispatch } from "react-redux"
import { serviceDetailsRequest, servicesRequest } from "../../../redux/actions/actionCreators"
import { useParams } from "react-router"

export default function ErrorMessage(props) {
    const { message } = props
    const {id} = useParams()
    const dispatch = useDispatch()

    const handleClickRetry = () => {
        if (id) {
            dispatch(serviceDetailsRequest(id[1]))
        } else {
            dispatch(servicesRequest())
        }
    }
    return (
        <div className="error-message">
            <p>Произошла ошибка: {message}</p>
            <button className="btn-retry" onClick={handleClickRetry}>Повторить</button>
        </div>
    )
}