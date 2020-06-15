
//获取日期和时间，格式如2020-10-01 16:42:12
export const getDateAndTime = (timeStamp, js = true) => {

    var timeStamp = timeStamp;
    if (!js) {
        timeStamp = parseInt(timeStamp + '000');
    }
    var now = new Date(timeStamp),
        y = now.getFullYear(),
        m = now.getMonth() + 1,
        d = now.getDate();
    return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
}

//获取时间
export const getTime = (timeStamp, js = true) => {

    var timeStamp = timeStamp;
    if (!js) {
        timeStamp = parseInt(timeStamp + '000');
    }
    var now = new Date(timeStamp);

    return now.toTimeString().substr(0, 8);
}

//
export const getDate = (timeStamp, js = true) => {

    var timeStamp = timeStamp;
    if (!js) {
        timeStamp = parseInt(timeStamp + '000');
    }
    var now = new Date(timeStamp),
        y = now.getFullYear(),
        m = now.getMonth() + 1,
        d = now.getDate();

    return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " ";
}

//获取时间戳
export const getTimeStamp = (date) => {
    return new Date(date);
}