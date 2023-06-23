import Preloader from "./Preloader/Preloader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

export default function SystemServices(props) {
    const { loading, error} = props.message;

    return (
        <div className="system-services">
            {loading && <Preloader />}
            {error && <ErrorMessage message={error}/>}
        </div>
    )
}