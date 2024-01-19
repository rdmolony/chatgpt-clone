"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = UserResponse;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function UserResponse(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, text));
}
UserResponse.propTypes = {
  /** Text entered by user */
  text: _propTypes["default"].string.isRequired
};