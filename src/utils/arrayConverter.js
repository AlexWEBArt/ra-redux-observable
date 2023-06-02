import timestampConverter from "./timestampConverter";

export default function arrayConverter(array) {
    return array.map(item => {
        let type = "article";
        let link = item.attachments[0].link && item.attachments[0].link.url;
        let caption = item.attachments[0].link && item.attachments[0].link.caption;
        let title = item.attachments[0].link && item.attachments[0].link.title;
        let img = item.attachments[0].link && item.attachments[0].link.photo.sizes[1].url
        
        item.attachments.forEach(attachment => {
            if(attachment.type === 'video') {
                type = "video";
                link = item.attachments[1].link.url;
                caption = null;
                title = null;
                img = null;
            };
            if(attachment.type === 'photo') {
                type = "photo";
                link = null;
                caption = null;
                title = null;
                img = null;
            };
        })

        return {
            id: item.id,
            header: {
                timestamp: timestampConverter(item.date),
            },
            body: {
                type,
                text: item.text,
                link,
                caption,
                title,
                img,
            },
            footer: {
                likes: item.likes.count,
                comments: item.comments.count,
                reposts: item.reposts.count,
                views: item.views.count,
            }
        }
    })
}