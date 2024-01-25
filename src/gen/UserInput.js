"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = UserInput;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function UserInput(_ref) {
  var onClickHandler = _ref.onClickHandler;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("form", {
    className: "flex bg-transparent border-2 border-grey-100 border-opacity-25 focus:outline focus:outline-blue-200 rounded-xl mx-auto mb-4 w-full max-w-screen-sm p-4"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: "flex-grow focus:outline-none",
    placeholder: "Message ChatGPT..."
  }), /*#__PURE__*/_react["default"].createElement("button", {
    className: "flex-shrink-0 ml-auto bg-slate-200 text-white p-0.5 rounded-lg dark:text-black dark:border-white dark:bg-white",
    onClick: onClickHandler
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    "class": "text-white dark:text-black"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 11L12 6L17 11M12 18V7",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full text-center"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-xs mx-auto"
  }, "ChatGPT can make mistakes. Consider checking important information.")));
}