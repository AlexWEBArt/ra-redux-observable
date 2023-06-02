export default function timestampConverter(time) {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes()
    const days = date.getDay();
    const monthNum = date.getMonth() + 1;
    let month
    switch(monthNum) {
        case 1:
            month = 'янв';
            break
        case 2:
            month = 'фев';
            break
        case 3:
            month = 'мар';
            break
        case 4:
            month = 'апр';
            break
        case 5:
            month = 'май';
            break
        case 6:
            month = 'июн';
            break
        case 7:
            month = 'июл';
            break
        case 8:
            month = 'авг';
            break
        case 9:
            month = 'сен';
            break
        case 10:
            month = 'окт';
            break
        case 11:
            month = 'ноя';
            break
        case 12:
            month = 'дек';
            break
        default:
            return null
    }
    return days + ' ' + month + ' в ' + hours + ':' + minutes
}