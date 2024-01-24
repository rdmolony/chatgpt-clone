"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LLMResponse = LLMResponse;
exports.UserResponse = UserResponse;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _OpenAi = _interopRequireDefault(require("./icons/OpenAi"));
var _User = _interopRequireDefault(require("./icons/User"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Response(_ref) {
  var fromWhom = _ref.fromWhom,
    Icon = _ref.Icon,
    text = _ref.text;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-4 py-2 justify-center text-base md:gap-6 m-auto"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group final-completion"
  }, /*#__PURE__*/_react["default"].createElement(Icon, null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative flex w-full flex-col lg:w-[calc(100%-115px)] agent-turn"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "font-semibold select-none"
  }, fromWhom), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-col gap-1 md:gap-3"
  }, text))));
}
function LLMResponse(_ref2) {
  var text = _ref2.text;
  return /*#__PURE__*/_react["default"].createElement(Response, {
    fromWhom: "ChatGPT",
    Icon: _OpenAi["default"],
    text: text
  });
}
LLMResponse.propTypes = {
  /** Text entered by LLM */
  text: _propTypes["default"].string.isRequired
};
function UserResponse(_ref3) {
  var text = _ref3.text;
  return /*#__PURE__*/_react["default"].createElement(Response, {
    fromWhom: "You",
    Icon: _User["default"],
    text: text
  });
}
UserResponse.propTypes = {
  /** Text entered by User */
  text: _propTypes["default"].string.isRequired
};