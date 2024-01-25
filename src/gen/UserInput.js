"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = UserInput;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function UserInput(_ref) {
  _objectDestructuringEmpty(_ref);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed bottom-0 my-4 w-full min-h-0 justify-center text-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mx-auto mb-4 w-full max-w-screen-sm"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    placeholder: "Message ChatGPT...",
    className: "bg-transparent border-2 border-grey-100 border-opacity-25 rounded-xl w-full p-4"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-xs mx-auto"
  }, "ChatGPT can make mistakes. Consider checking important information.")));
}