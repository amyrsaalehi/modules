import moment from 'moment';
const JalaliMoment = require('moment-jalaali');

export function getDaysAgoFromTimestamp(timestamp) {
    moment.locale('fa');
    return JalaliMoment(timestamp).fromNow().replace("days ago", "");
}