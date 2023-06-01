import { useSelector } from "react-redux"
import Preloader from "./Preloader/Preloader"
import ErrorMessage from "./ErrorMessage/ErrorMessage"

export default function SystemServices() {
    const { loading, error } = useSelector(state => state.services)

    return (
        <div className="system-services">
            {loading && <Preloader />}
            {error && <ErrorMessage message={error}/>}
        </div>
    )
}