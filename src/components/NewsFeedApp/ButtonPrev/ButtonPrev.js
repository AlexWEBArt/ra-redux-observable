import { useDispatch, useSelector } from "react-redux"
import { previousNewsRequest } from "../../../redux/actions/actionCreatorsNewsFeed/actionCreatorsNewsFeed";
import NewsPreloader from "../NewsPreloader/NewsPreloader";
import './buttonPrev.css'

export default function ButtonPrev() {
    const { newsItem, loading } = useSelector(state => state.news);
    const dispatch = useDispatch();

    const handleClickPrev = () => {
        dispatch(previousNewsRequest(newsItem[newsItem.length - 1].id))
    };

    return (
        <>
            {newsItem[0] && !loading && <button className="btn-previous" onClick={handleClickPrev}>К предыдущим записям</button>}
            {loading && <NewsPreloader />}
        </>
    )
}