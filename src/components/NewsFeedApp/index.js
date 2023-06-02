import ButtonPrev from "./ButtonPrev/ButtonPrev";
import NewsContainer from "./NewsContainer/NewsContainer";

export default function NewsFeed() {
    return (
        <div className="news-feed-app">
            <NewsContainer />
            <ButtonPrev />
        </div>
    )
}