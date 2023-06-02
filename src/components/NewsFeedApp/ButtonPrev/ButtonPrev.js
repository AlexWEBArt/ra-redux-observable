import { useDispatch, useSelector } from "react-redux"
import { previousNewsRequest } from "../../../redux/actions/actionCreatorsNewsFeed/actionCreatorsNewsFeed";

export default function ButtonPrev() {
    const { newsItem, loading, error } = useSelector(state => state.news)
    const dispatch = useDispatch();

    const handleClickPrev = () => {
        dispatch(previousNewsRequest(newsItem[newsItem.length - 1].id))
    }
    console.log(useSelector(state => state))
    return (
        <>
            {newsItem[0] && !loading && <button className="btn-previous" onClick={handleClickPrev}>К предыдущим записям</button>}
        </>
    )
}