"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = UserResponse;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _OpenAi = _interopRequireDefault(require("./icons/OpenAi"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function UserResponse(_ref) {
  var icon = _ref.icon;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-4 py-2 justify-center text-base md:gap-6 m-auto"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group final-completion"
  }, /*#__PURE__*/_react["default"].createElement(_OpenAi["default"], null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative flex w-full flex-col lg:w-[calc(100%-115px)] agent-turn"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "font-semibold select-none"
  }, "You"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-col gap-1 md:gap-3"
  }, text))));
}
UserResponse.propTypes = {
  /** Text entered by User */
  text: _propTypes["default"].string.isRequired
};