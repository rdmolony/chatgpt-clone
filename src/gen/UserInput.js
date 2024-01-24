"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = UserInput;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function UserInput(_ref) {
  _objectDestructuringEmpty(_ref);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col items-center fixed bottom-0 w-full mb-4"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: "bg-transparent border-2 border-white border-opacity-25 rounded-xl p-4 mb-2 w-full max-w-screen-sm",
    placeholder: "Message ChatGPT..."
  }), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-xs"
  }, "ChatGPT can make mistakes. Consider checking important information."));
}
UserInput.propTypes = {};