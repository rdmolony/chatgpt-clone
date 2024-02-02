"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Response;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Spinner = _interopRequireDefault(require("./icons/Spinner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Response(_ref) {
  var fromWhom = _ref.fromWhom,
    Icon = _ref.Icon,
    text = _ref.text;
  Text = /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-col gap-1 md:gap-3"
  }, text);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-4 py-2 justify-center md:gap-6 m-auto"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]"
  }, /*#__PURE__*/_react["default"].createElement(Icon, null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative flex w-full flex-col lg:w-[calc(100%-115px)]"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "font-semibold select-none"
  }, fromWhom), text.length > 0 ? Text : /*#__PURE__*/_react["default"].createElement(_Spinner["default"], null))));
}
Response.propTypes = {
  /** Who sent the response */
  fromWhom: _propTypes["default"].string.isRequired,
  /** Icon of responder */
  Icon: _propTypes["default"].elementType,
  /** Text entered by responder */
  text: _propTypes["default"].string.isRequired
};