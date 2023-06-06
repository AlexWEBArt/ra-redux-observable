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
                    <span className='item-footer-img'>&#9825;</span>
                    <span className='item-footer-text'>{footer.likes}</span>
                </div>
                <div className="news-item-footer-comments">
                    <span className='item-footer-img'>&#128488;</span>
                    <span className='item-footer-text'>{footer.comments}</span>
                </div>
                <div className="news-item-footer-reposts">
                    <span className='item-footer-img'>&#11179;</span>
                    <span className='item-footer-text'>{footer.reposts}</span>
                </div>
                <div className="news-item-footer-views">
                    <span className='item-footer-img'>&#128065;</span>
                    <span className='item-footer-text'>{footer.views}</span>
                </div>
            </div>
        </div>
    )
}