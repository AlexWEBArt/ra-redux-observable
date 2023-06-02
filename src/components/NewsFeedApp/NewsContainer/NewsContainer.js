import { useDispatch, useSelector } from "react-redux"
import NewsItem from "../NewsItem/NewsItem"
import { useEffect } from "react";
import { newsRequest } from "../../../redux/actions/actionCreatorsNewsFeed/actionCreatorsNewsFeed";

export default function NewsContainer() {
    const { newsItem } = useSelector(state => state.news);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(newsRequest())
    }, [dispatch])

    return (
        <div className="news-container">
            {newsItem && newsItem.map(item => <NewsItem key={item.id} items={item}/>)}
        </div>
    )
}