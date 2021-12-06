"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

var _NotificationsNoneOutlined = _interopRequireDefault(require("@mui/icons-material/NotificationsNoneOutlined"));

var _ShoppingCartOutlined = _interopRequireDefault(require("@mui/icons-material/ShoppingCartOutlined"));

var _PersonOutlined = _interopRequireDefault(require("@mui/icons-material/PersonOutlined"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Theme4DesktopHeader = _ref => {
  let {
    store,
    Image,
    getDaysAgoFromTimestamp
  } = _ref;
  const classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_material.Grid, {
    className: classes.root,
    container: true,
    direction: "column",
    alignItems: "center",
    p: 3
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    container: true,
    alignItems: "center",
    justifyContent: "space-between",
    wrap: "nowrap"
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    container: true,
    wrap: "nowrap",
    maxWidth: 280
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    className: classes.cartUser,
    item: true,
    p: 1
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    container: true,
    justifyContent: "center",
    wrap: "nowrap",
    gap: 1
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    container: true,
    wrap: "nowrap",
    justifyContent: "flex-end",
    gap: 0.5
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, null, "\u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC"), /*#__PURE__*/_react.default.createElement(_PersonOutlined.default, null)), /*#__PURE__*/_react.default.createElement(_material.Divider, {
    orientation: "vertical",
    flexItem: true
  }), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    container: true,
    wrap: "nowrap",
    justifyContent: "flex-start",
    gap: 0.5
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, null, "4\u0633\u0628\u062F \u062E\u0631\u06CC\u062F"), /*#__PURE__*/_react.default.createElement(_ShoppingCartOutlined.default, null)))), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    container: true,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 60
  }, /*#__PURE__*/_react.default.createElement(_material.IconButton, null, /*#__PURE__*/_react.default.createElement(_NotificationsNoneOutlined.default, null)))), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    flexGrow: 1,
    maxWidth: 800
  }, /*#__PURE__*/_react.default.createElement(_material.TextField, {
    placeholder: "\u062C\u0633\u062A\u062C\u0648",
    fullWidth: true
  })), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    container: true,
    wrap: "nowrap",
    gap: 2,
    maxWidth: 220
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    container: true,
    direction: "column",
    justifyContent: "center",
    gap: 0.5
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    component: "h1"
  }, store.storeData.name)), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    component: "h3"
  }, "\u0622\u062E\u0631\u06CC\u0646 \u062E\u0631\u06CC\u062F :", " ", getDaysAgoFromTimestamp(store.storeData.ecommerce.last_buy), " ", "\u0633\u0627\u0644 \u067E\u06CC\u0634"))), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    className: classes.logo,
    width: 60,
    height: 60,
    p: 1
  }, /*#__PURE__*/_react.default.createElement(Image, {
    src: store.storeData.logo.image,
    width: 52,
    height: 52,
    alt: store.storeData.name
  }))))));
};

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    "& h1": {
      fonsize: 24,
      fontWeight: "bold"
    },
    "& h3": {
      fontSize: 12
    }
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: theme.shadows[1],
    borderRadius: theme.shape.borderRadius
  },
  cartUser: {
    width: "auto",
    border: "1px solid ".concat(theme.palette.border.main),
    borderRadius: theme.shape.borderRadius,
    "& p": {
      whiteSpace: "nowrap",
      fontSize: 14
    }
  }
}));
var _default = Theme4DesktopHeader;
exports.default = _default;