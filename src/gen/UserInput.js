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
  return /*#__PURE__*/_react["default"].createElement("input", {
    className: "bg-slate-50 rounded-xl shadow-lg my-4 mx-12 p-2 w-64",
    placeholder: "Message ChatGPT..."
  });
}
UserInput.propTypes = {};