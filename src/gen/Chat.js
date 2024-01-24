"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Chat;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Greeting = _interopRequireDefault(require("./Greeting"));
var _UserInput = _interopRequireDefault(require("./UserInput"));
var _LLMResponse = _interopRequireDefault(require("./LLMResponse"));
var _UserResponse = _interopRequireDefault(require("./UserResponse"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Chat(_ref) {
  var userResponses = _ref.userResponses,
    llmResponses = _ref.llmResponses;
  if (userResponses.length === 0) {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Greeting["default"], null), /*#__PURE__*/_react["default"].createElement(_UserInput["default"], null));
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center"
  }, userResponses.map(function (userResponse, idx) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: idx,
      className: "my-4"
    }, /*#__PURE__*/_react["default"].createElement(_UserResponse["default"], {
      text: userResponse
    }), /*#__PURE__*/_react["default"].createElement(_LLMResponse["default"], {
      text: llmResponses[idx]
    }));
  }), /*#__PURE__*/_react["default"].createElement(_UserInput["default"], null));
}
Chat.defaultProps = {
  userResponses: [],
  llmResponses: []
};
Chat.propTypes = {
  /** List of LLM text responses  */
  llmResponses: _propTypes["default"].arrayOf(_propTypes["default"].string),
  /** List of user input text */
  userResponses: _propTypes["default"].arrayOf(_propTypes["default"].string)
};