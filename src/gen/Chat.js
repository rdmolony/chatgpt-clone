"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Chat;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Greeting = _interopRequireDefault(require("./Greeting"));
var _UserInput = _interopRequireDefault(require("./UserInput"));
var _LLMResponse = _interopRequireDefault(require("./LLMResponse"));
var _UserResponse = _interopRequireDefault(require("./UserResponse"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function Chat(_ref) {
  _objectDestructuringEmpty(_ref);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement(_Greeting["default"], null), /*#__PURE__*/_react["default"].createElement(_UserInput["default"], null));
}
Chat.propTypes = {};