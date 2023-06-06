import placeForThePicture from '../images/placeForThePicture.jpg'

export default function ArticleContent(props) {
    const { text, link, caption, title } = props.body;

    return (
        <div className="news-item-body">
            <p className="news-item-body-text">
                {text}
            </p>
            <a className="news-item-body-link" href={link}>
                <img className="news-item-body-link-image" src={placeForThePicture} alt='some preview'></img>
            </a>
            <div className="news-item-body-link-info">
                <h3 className="news-item-body-link-info-title">{title}</h3>
                <p className="news-item-body-link-info-caption" href={link}>{caption}</p>
            </div>
        </div>
    )
}

