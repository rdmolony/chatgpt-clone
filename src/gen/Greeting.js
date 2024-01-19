"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Greeting;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function Greeting(_ref) {
  _objectDestructuringEmpty(_ref);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, "How can I help you today?"));
}
Greeting.propTypes = {};