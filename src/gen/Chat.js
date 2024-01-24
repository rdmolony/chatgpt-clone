"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Chat;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Greeting = _interopRequireDefault(require("./Greeting"));
var _UserInput = _interopRequireDefault(require("./UserInput"));
var _Response = require("./Response");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Chat(_ref) {
  var responses = _ref.responses;
  if (responses.length === 0) {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Greeting["default"], null), /*#__PURE__*/_react["default"].createElement(_UserInput["default"], null));
  }
  return /*#__PURE__*/_react["default"].createElement("div", null, responses.map(function (response, idx) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: idx,
      className: "my-4"
    }, /*#__PURE__*/_react["default"].createElement(_Response.UserResponse, {
      text: response.user
    }), /*#__PURE__*/_react["default"].createElement(_Response.LLMResponse, {
      text: response.llm
    }));
  }), /*#__PURE__*/_react["default"].createElement(_UserInput["default"], null));
}
Chat.defaultProps = {
  responses: []
};
Chat.propTypes = {
  /** List of User & LLM text responses  */
  responses: _propTypes["default"].arrayOf(_propTypes["default"].objectOf(_propTypes["default"].string))
};