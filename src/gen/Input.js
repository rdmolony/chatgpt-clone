"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Input;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function Input(_ref) {
  _objectDestructuringEmpty(_ref);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
    className: "rounded-xl shadow-lg p-2 mt-2 mb-4 mx-12 bg-slate-50"
  }));
}
Input.propTypes = {};