import dayjs from 'dayjs'

export const getTimeMessage = (date) => {
    return dayjs(date ).fromNow()
};