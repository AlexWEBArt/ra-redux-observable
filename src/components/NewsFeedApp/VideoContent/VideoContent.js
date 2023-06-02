export default function ArticleContent(props) {
    const { text, link, caption, title, img } = props.body;
    
    return (
        <div className="news-item-body">
            <p className="news-item-body-text">
                {text}
            </p>
            <a className="news-item-body-link" href={link}>
                <div className="news-item-body-link-image" src={img}></div>
            </a>
            <div className="news-item-body-link-info">
                <h3 className="news-item-body-link-info-title">{title}</h3>
                <div className="news-item-body-link-info-caption" href={link}>{caption}</div>
            </div>
        </div>
    )
}