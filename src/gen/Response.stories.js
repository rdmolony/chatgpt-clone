"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.UserResponse = exports.LLMResponse = void 0;
var _Response = require("./Response");
var _OpenAi = _interopRequireDefault(require("./icons/OpenAi"));
var _User = _interopRequireDefault(require("./icons/User"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
  component: _Response.Response,
  title: "Response",
  tags: ['autodocs']
};
var LLMResponse = exports.LLMResponse = {
  args: {
    fromWhom: "ChatGPT",
    Icon: _OpenAi["default"],
    text: "I'm an LLM"
  }
};
var UserResponse = exports.UserResponse = {
  args: {
    fromWhom: "You",
    Icon: _User["default"],
    text: "Some drivel..."
  }
};