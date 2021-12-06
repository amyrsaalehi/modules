"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDaysAgoFromTimestamp = getDaysAgoFromTimestamp;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const JalaliMoment = require('moment-jalaali');

function getDaysAgoFromTimestamp(timestamp) {
  _moment.default.locale('fa');

  return JalaliMoment(timestamp).fromNow().replace("days ago", "");
}