"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Chat;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Greeting = _interopRequireDefault(require("./Greeting"));
var _UserInput = _interopRequireDefault(require("./UserInput"));
var _Response = _interopRequireDefault(require("./Response"));
var _OpenAi = _interopRequireDefault(require("./icons/OpenAi"));
var _User = _interopRequireDefault(require("./icons/User"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Chat(_ref) {
  var messages = _ref.messages,
    onInputHandler = _ref.onInputHandler,
    onSubmitHandler = _ref.onSubmitHandler;
  if (Object.keys(messages).length === 0) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex flex-col h-screen"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "justify-center items-center h-5/6"
    }, /*#__PURE__*/_react["default"].createElement(_Greeting["default"], null)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_UserInput["default"], {
      onInputHandler: onInputHandler,
      onSubmitHandler: onSubmitHandler
    })));
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative flex flex-col h-screen"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-5/6 overflow-scroll"
  }, Object.keys(messages).map(function (idx) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: idx,
      className: "my-4"
    }, /*#__PURE__*/_react["default"].createElement(_Response["default"], {
      fromWhom: "You",
      Icon: _User["default"],
      text: messages[idx].user
    }), /*#__PURE__*/_react["default"].createElement(_Response["default"], {
      fromWhom: "ChatGPT",
      Icon: _OpenAi["default"],
      text: messages[idx].llm
    }));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "items-center"
  }, /*#__PURE__*/_react["default"].createElement(_UserInput["default"], {
    onInputHandler: onInputHandler,
    onSubmitHandler: onSubmitHandler
  })));
}
Chat.defaultProps = {
  messages: {}
};
Chat.propTypes = {
  /** List of User messages & LLM responses  */
  messages: _propTypes["default"].objectOf(_propTypes["default"].objectOf(_propTypes["default"].string)),
  /** Event on text input  */
  onInputHandler: _propTypes["default"].func,
  /** Event on form submission  */
  onSubmitHandler: _propTypes["default"].func
};