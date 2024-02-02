"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WaitingOnLLMResponse = exports.UserResponse = exports.LLMResponse = void 0;
var _Response = _interopRequireDefault(require("./Response"));
var _OpenAi = _interopRequireDefault(require("./icons/OpenAi"));
var _User = _interopRequireDefault(require("./icons/User"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
  component: _Response["default"],
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
    text: "I am you"
  }
};
var WaitingOnLLMResponse = exports.WaitingOnLLMResponse = {
  args: {
    fromWhom: "ChatGPT",
    Icon: _OpenAi["default"],
    text: ""
  }
};