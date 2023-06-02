import VideoContent from '../VideoContent/VideoContent';
import PhotoContent from '../PhotoContent/PhotoContent';
import ArticleContent from '../ArticleContent/ArticleContent';
import logo from '../images/logoNetology.jpg'
import './newsItem.css'

export default function NewsItem(props) {
    const { header, body, footer } = props.items;

    return (
        <div className="news-item">
            <div className="news-item-header">
                <img className="news-item-header-logo" src={logo} alt="logo Netology"></img>
                <div className="news-item-header-title">
                    <a className="news-item-header-title-link" href="https://netology.ru/">Университет интернет-профессий Нетология</a>
                    <p className="news-item-header-title-timestamp">{header.timestamp}</p>
                </div>
                <div className="news-item-header-action"></div>
            </div>
            {body.type === 'video' && <VideoContent body={body}/>}
            {body.type === 'photo' && <PhotoContent body={body}/>}
            {body.type === 'article' && <ArticleContent body={body}/>}
            <div className="news-item-footer">
                <div className="news-item-footer-likes">
                    {footer.likes}
                </div>
                <div className="news-item-footer-comments">
                    {footer.comments}
                </div>
                <div className="news-item-footer-reposts">
                    {footer.reposts}
                </div>
                <div className="news-item-footer-views">
                    {footer.views}
                </div>
            </div>
        </div>
    )
}