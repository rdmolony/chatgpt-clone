"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Icon;
var _react = _interopRequireDefault(require("react"));
var _Spinner = _interopRequireDefault(require("./Spinner.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function Icon(_ref) {
  _objectDestructuringEmpty(_ref);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "rounded-full mx-2 relative p-1 h-9 w-9 text-white flex items-center justify-center"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    className: "".concat(_Spinner["default"].spinner_7uc5, " ").concat(_Spinner["default"].spinner_ZAxd),
    x: "1",
    y: "6",
    width: "2.8",
    height: "12"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    className: "".concat(_Spinner["default"].spinner_7uc5, " ").concat(_Spinner["default"].spinner_RibN),
    x: "5.8",
    y: "6",
    width: "2.8",
    height: "12"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    className: _Spinner["default"].spinner_7uc5,
    x: "10.6",
    y: "6",
    width: "2.8",
    height: "12"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    className: "".concat(_Spinner["default"].spinner_7uc5, " ").concat(_Spinner["default"].spinner_RibN),
    x: "15.4",
    y: "6",
    width: "2.8",
    height: "12"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    className: "".concat(_Spinner["default"].spinner_7uc5, " ").concat(_Spinner["default"].spinner_ZAxd),
    x: "20.2",
    y: "6",
    width: "2.8",
    height: "12"
  })));
}