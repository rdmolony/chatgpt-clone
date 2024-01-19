"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Chat;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Chat(_ref) {
  var name = _ref.name;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "rounded-xl shadow-lg text-center m-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "py-4"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Dia Duit ", /*#__PURE__*/_react["default"].createElement("strong", null, name), ", cad faoi ar mhaith labhairt?")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
    className: "rounded-xl shadow-lg p-2 mt-2 mb-4 mx-12 bg-slate-50"
  })));
}
Chat.propTypes = {
  /** Name of person to greet */
  name: _propTypes["default"].string.isRequired
};